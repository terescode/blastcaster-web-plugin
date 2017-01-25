/*
 * Copyright (C) 2017, Terescode, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Scott DeWitt <scott@terescode.com>, 2017
 */
 (function () {
   'use strict';

   var urlRe = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

   function setStatus(clazz, msg) {
     var status = document.getElementById('status');
     status.className = clazz
     status.textContent = msg;
     if (clazz === 'ok') {
       setTimeout(function() {
         status.textContent = '';
       }, 750);
     }
   }

   function save_options() {
     var prefix = document.getElementById('bc-wp-prefix').value;
     if (!urlRe.test(prefix.trim())) {
       setStatus('error', 'Invalid URL. Please enter a valid URL.');
       return;
     }
     setStatus('', 'Saving options...');
     chrome.storage.local.set({
       'bc-wp-prefix': prefix
     }, function() {
       chrome.runtime.sendMessage({
         type: 'optionsChanged',
         wpPrefix: prefix
       });
       setStatus('ok', 'Options saved.');
     });
   }

   function restore_options() {
     var prefix = document.getElementById('bc-wp-prefix');
     chrome.storage.local.get({
       'bc-wp-prefix': ''
     }, function(items) {
       prefix.value = items['bc-wp-prefix'];
     });
   }

   document.addEventListener('DOMContentLoaded', restore_options);
   document.getElementById('save').addEventListener('click', save_options);

}());
