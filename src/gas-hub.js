    debugger;
    chrome.storage.sync.get([
      'scm',
      'token',
      'user',
      'baseUrl',
      'bindRepo',
      'bindBranch',
      'bindType',
      'bindPattern',
      'bindConfig'
    ], (item) => {
      context.bindType = item.bindType || {};
      context.bindPattern = item.bindPattern || {};
      context.bindConfig = item.bindConfig || {};
      context.config = context.bindConfig[context.id] || {};
      context.config.filetype = context.config.filetype || context.bindType[context.id] || '.gs';
      context.config.ignorePattern = context.config.ignorePattern || context.bindPattern[context.id] || [];
      context.config.manifestEnabled = context.config.manifestEnabled || false;
  ['repo', 'branch', 'gist', 'diff', 'config'].forEach((type) => {
  ['pull', 'push', 'config'].forEach((type) => {
    $(document).on('mouseover', `#${type}-button`, () => {
      $(`#${type}-button`).addClass('goog-toolbar-button-hover');
    $(document).on('mouseleave', `#${type}-button`, () => {
      $(`#${type}-button`).removeClass('goog-toolbar-button-hover');
  });

  ['pull', 'push'].forEach(type => {
    $(document).on('click', `#${type}-button`, () => {
  })

  $(document).on('click', '#config-button', () => {
    $('#filetype').val(context.config.filetype);
    $('#manage-manifest').prop("checked", context.config.manifestEnabled);
    $('#ignore-pattern').val(context.config.ignorePattern.join(';'));
    changeModalState('config', true);
  $(document).on('click', '#save-config', () => {
    context.config.filetype = $('#filetype').val();
    context.config.manifestEnabled = $('#manage-manifest').prop( "checked" );
    context.config.ignorePattern = $('#ignore-pattern').val().split(';').filter(p => p !== '');
    context.bindConfig[context.id] = context.config;
    try {
      chrome.storage.sync.set({ bindConfig: context.bindConfig });
      changeModalState('config', false);
    } catch (err) {
      showAlert(err.message, LEVEL_ERROR);
    }
  })

    const re = new RegExp(`\\${context.config.filetype}$`);
      if (context.config.manifestEnabled && e.innerText === 'appsscript.json') {
        hash['appsscript'] = 'appsscript.json';
      }
        if (elem) {
          hash[elem.file.replace(re, '.gs')] = elem.content;
        }
  .filter(file => {
    if (context.config.manifestEnabled && file === 'appsscript.json') {
      return true;
    }
    for (let i = 0; i < context.config.ignorePattern.length; i ++) {
      let p = new RegExp(context.config.ignorePattern[i]);
      if (p.test(file)) return false; 
    }
      if (file === 'appsscript.json') {
        return diff; //can not delete manifest file
      }
  return context.gasHeaders["X-GWT-Module-Base"];
    const margin = 600;
    const left = (width - margin) / 2;
    $(`#${type}-modal`).before(`<div class="scm-modal-bg modal-dialog-bg" style="opacity: 0.5; width: ${width}px; height: ${height}px;" aria-hidden="true"></div>`);
    $(`#${type}-modal`).css('left', left).show();
    $(`#${type}-modal`).hide();