// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
	
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

	var randNum = Math.floor((Math.random() * 20) + 1);

	// this now works
	chrome.tabs.executeScript({
        code: 'document.body.style.backgroundImage="url(\"+chrome.extension.getURL(\"images/cages/' + randNum + '.jpg\")+\")";'
    });
});
