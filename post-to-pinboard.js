// ==UserScript==
// @name Post to Pinboard
// @match *
// @run-at document-start
// ==/UserScript==

// Change keyboard shortcut below around 'e.key'. Default is Meta-5 (e.g. Command-5 on
// the Mac). If you want to use another modifier key than Meta, you'll probably have to
// also check that you are not in an input field i.e. typing text already. The vim-mode
// plugin is a good model to follow here.

document.addEventListener('keydown', function (e) {
    if (e.metaKey && e.key === '5') {
        // taken directly from https://pinboard.in/howto/ minus 'javascript:'
        q=location.href;if(document.getSelection){d=document.getSelection();}else{d='';};p=document.title;void(open('https://pinboard.in/add?url='+encodeURIComponent(q)+'&description='+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=700,height=350'));
    }
})