/*
 * Copyright (C) 2017, Terescode, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Scott DeWitt <scott@terescode.com>, 2017
 */
 (function () {
  'use strict';

  var wpPrefix = '',
    wpSuffix = '/wp-admin/edit.php?page=bc_add_blast',
    popupURL = chrome.extension.getURL('html/popup.html'),
    activeTabId,
    popup,
    popupChannel;

  function handleClick() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        chrome.windows.create({
          url: popupURL,
          type: 'normal',
          height: 900,
          width: 680
        }, function (window) {
          popup = window;
        });
      }
    });
  }

  function handleMessage(message, sender, sendResponse) {
    if (message && message.type) {
      if (message.type === 'inspectPage') {
        if (wpPrefix) {
          popupChannel = sendResponse;
          chrome.tabs.executeScript(activeTabId, {
            file: '/js/pageInspector.js'
          });
          return true;
        } else {
          sendResponse(message);
        }
      } else if (message.type === 'pageInspected') {
        if (popupChannel) {
          message.wpUrl = wpPrefix + wpSuffix;
          popupChannel(message);
          popupChannel = null;
        }
      } else if (message.type === 'optionsChanged' ) {
        wpPrefix = message.wpPrefix;
      }
    }
    return false;
  }

  function storageDidLoad(results) {
    if (chrome.runtime.lastError) {
      storageLoadError();
      return;
    }
    if (results['bc-wp-prefix']) {
      wpPrefix = results['bc-wp-prefix'];
    }
  }

  function storageLoadError(value) {
      console.log('Could not load from local storage!');
      console.log(value);
  }

  function initialize() {
    chrome.runtime.onMessage.addListener(handleMessage);
    chrome.browserAction.onClicked.addListener(handleClick);
    chrome.storage.local.get(null, storageDidLoad);
  }

  initialize();
}());
