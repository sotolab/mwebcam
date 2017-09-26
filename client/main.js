import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.camera.onRendered(function() {
  
      Webcam.on( 'error', function(err) {
          console.log(err); // outputs error to console instead of window.alert
      });   
  
      Webcam.set({
          width: 320,
          height: 240,
          dest_width: 320,
          dest_height: 240,
          image_format: 'jpeg',
          jpeg_quality: 90
      });
      Webcam.attach( '#webcam' );
  })
  
  Template.camera.events({
      'click .snap': function () {
          Webcam.snap( function(image) {
              Session.set('webcamSnap', image);
          })
      }

      
      
  });
  
  Template.camera.helpers({
      image: function () {
          return Session.get('webcamSnap');
      }
  });

