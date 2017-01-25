/*
 * Copyright (C) 2017, Terescode, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Scott DeWitt <scott@terescode.com>, 2017
 */
 (function () {
  'use strict';

  function handleResponse(response) {
    var form = document.getElementById('pageDataForm'),
      setup = document.getElementById('setup'),
      setupLink = document.getElementById('setup-link');

    if (!response.wpUrl) {
      form.style.display = 'none';
      setup.style.display = 'block';
      setup.addEventListener('click', function () {
        if (chrome.runtime.openOptionsPage) {
          chrome.runtime.openOptionsPage();
        } else {
          window.open(chrome.runtime.getURL('../html/options.html'));
        }
      });
      return;
    }

    form.pageData.value = JSON.stringify(response.result);
    form.action = response.wpUrl;
    form.submit();
  }

  chrome.runtime.sendMessage(
    {type: 'inspectPage'},
    handleResponse
  );

}());
