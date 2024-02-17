import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  width: 640,
});

const saveCurrentTimeThrottled = throttle(function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000); 

player.on('timeupdate', saveCurrentTimeThrottled);

const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });


  