$("document").ready(function(){
    DomOldSchoolStreamer.launch($(".domCounter"), function(){console.log("callback!!!")});
    DomOldSchoolStreamer.launch($(".domCounter2"), function(){console.log("callback!!!")});
});