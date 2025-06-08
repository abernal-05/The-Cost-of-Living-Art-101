// Author: Audrey DeMerchant/group 5
 //Date: May 26, 2025 


// audio-manager.js
class AudioManager {
    constructor(audioSrc) {
        this.audioSrc = audioSrc;
        this.audio = null;
        this.audioStarted = false;
        this.init();
    }

    init() {
        // Create audio element
        this.audio = document.createElement('audio');
        this.audio.loop = true;
        this.audio.preload = 'auto';
        this.audio.src = this.audioSrc;
        document.body.appendChild(this.audio);

        // Resume from saved state
        this.resumeAudio();
        
        // Start audio on user interaction
        this.setupUserInteraction();
        
        // Save state before leaving page
        this.setupBeforeUnload();
        
        // Update saved time periodically
        this.setupPeriodicSave();
    }

    resumeAudio() {
        const savedTime = localStorage.getItem('bgAudioCurrentTime');
        const wasPlaying = localStorage.getItem('bgAudioWasPlaying') === 'true';
        const audioStartedBefore = localStorage.getItem('bgAudioStarted') === 'true';
        
        if (savedTime) {
            this.audio.currentTime = parseFloat(savedTime);
        }
        
        if (wasPlaying && audioStartedBefore) {
            // Try to resume automatically (might fail due to autoplay policy)
            this.audio.play().catch(() => {
                // If auto-resume fails, wait for user interaction
                console.log('Auto-resume failed, waiting for user interaction');
            });
        }
    }

    setupUserInteraction() {
        const startAudio = () => {
            if (!this.audioStarted) {
                this.audio.play().then(() => {
                    this.audioStarted = true;
                    localStorage.setItem('bgAudioStarted', 'true');
                    localStorage.setItem('bgAudioWasPlaying', 'true');
                    console.log('Background audio started');
                }).catch(e => {
                    console.log('Audio failed to start:', e);
                });
            } else if (this.audio.paused) {
                // Resume if it was paused
                this.audio.play().then(() => {
                    localStorage.setItem('bgAudioWasPlaying', 'true');
                }).catch(e => {
                    console.log('Audio failed to resume:', e);
                });
            }
        };

        // Multiple event listeners for better compatibility
        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, startAudio, { once: true });
        });
    }

    setupBeforeUnload() {
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('bgAudioCurrentTime', this.audio.currentTime);
            localStorage.setItem('bgAudioWasPlaying', !this.audio.paused);
        });
    }

    setupPeriodicSave() {
        setInterval(() => {
            if (this.audio && !this.audio.paused) {
                localStorage.setItem('bgAudioCurrentTime', this.audio.currentTime);
                localStorage.setItem('bgAudioWasPlaying', 'true');
            }
        }, 1000);
    }

    // Public methods for manual control
    play() {
        return this.audio.play();
    }

    pause() {
        this.audio.pause();
        localStorage.setItem('bgAudioWasPlaying', 'false');
    }

    setVolume(volume) {
        this.audio.volume = volume;
        localStorage.setItem('bgAudioVolume', volume);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace 'your-audio.m4a' with your actual audio file path
    window.audioManager = new AudioManager('your-audio.m4a');
    
    // Restore volume if saved
    const savedVolume = localStorage.getItem('bgAudioVolume');
    if (savedVolume) {
        window.audioManager.setVolume(parseFloat(savedVolume));
    }
});