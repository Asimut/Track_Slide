function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gdpepvQ9iF":
        Script1();
        break;
      case "6ksGpKxAc5r":
        Script2();
        break;
      case "5asUIVc7VJp":
        Script3();
        break;
      case "5gm0ObgKeji":
        Script4();
        break;
      case "5g7VBTC4WZN":
        Script5();
        break;
      case "5xtA9RwJBgR":
        Script6();
        break;
      case "5W3bKtfVLVP":
        Script7();
        break;
      case "6Ydz6Z6HOln":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script2 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script3 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script4 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script5 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script6 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script7 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

window.Script8 = function()
{
  
function isSCORMInitialized() {
console.log(window);
  
  return (typeof window.SCORM2004_objAPI !== 'undefined' || typeof window.API !== 'undefined');
}


function saveProgress() {
console.log('saveProgress');

  if (isSCORMInitialized()) {
  	var player = GetPlayer();
  	
    var slideNumber = player.GetVar("SlideNumber");
    var bookmark = '';
	console.log('slideNumber ' + slideNumber);
   
   if (typeof window.SCORM2004_objAPI !== 'undefined') {
      window.SCORM2004_CallSetValue('cmi.location', slideNumber);
      window.SCORM2004_CallCommit('');
    } else if (typeof window.API !== 'undefined') {
      window.API.LMSCommit('');
      window.API.SetValue('cmi.core.lesson_location', slideNumber);
      window.API.SetValue('cmi.suspend_data', bookmark);
      window.API.LMSCommit('');
    } else {
      var progressData = {
        location: slideNumber,
        suspendData: bookmark
      };
      var jsonProgressData = JSON.stringify(progressData);
      window.localStorage.setItem('cornerstone_progress', jsonProgressData);
    }
  }
}


function restoreProgress() {
  if (isSCORMInitialized()) {
    if (typeof window.SCORM2004_objAPI !== 'undefined') {
      var location = window.SCORM2004_CallGetValue('cmi.location');

    } else if (typeof window.API !== 'undefined') {
      var location = window.API.GetValue('cmi.core.lesson_location');
      var suspendData = window.API.GetValue('cmi.suspend_data');

    } else {

      var jsonProgressData = window.localStorage.getItem('cornerstone_progress');
      if (jsonProgressData) {
        var progressData = JSON.parse(jsonProgressData);
        var location = progressData.location;
        var suspendData = progressData.suspendData;

      }
    }
  }
}


saveProgress();

}

};
