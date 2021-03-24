// ==UserScript==
// @name Post to Pinboard
// @match *
// @run-at document-start
// ==/UserScript==

// Change keyboard shortcut below around 'e.key'. Default is Meta-B (e.g. Command-B on
// the Mac). If you want to use another modifier key than Meta, you'll probably have to
// also check that you are not in an input field i.e. typing text already. The vim-mode
// plugin is a good model to follow here.

document.addEventListener('keydown', function (e) {
    if (e.metaKey && e.key === 'b') {
        // taken directly from https://pinboard.in/howto/ minus 'javascript:'
        if(document.getSelection){s=document.getSelection();}else{s='';};document.location='https://pinboard.in/add?next=same&url='+encodeURIComponent(location.href)+'&description='+encodeURIComponent(s)+'&title='+encodeURIComponent(document.title);
    }
})

