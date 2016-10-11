(pt => {

  function count(data) {
    $('input').val(data.length)
  }

  function onNext(event) {
    pt(event);
  }

  function onError(error) {
    pt(error);
  }

  function onComplete(complete) {
    pt('Completed');
  }

  Rx.Observable.timer(1000, 2000)
    .do(() => {
      Rx.Observable
        .fromPromise($.get('/templates'))
        .subscribe(count, onError, onComplete)
    })
    .subscribe(onNext, onError, onComplete)

  $('#newTemplate').on('click', () => $.post('/templates', { data: '' }))

})(window.console.log);