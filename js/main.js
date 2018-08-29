const QLITE = new QliteExceptionWrapper(window.location.origin);

// qlite.js is documented on github.com/qubiclite/qlite.js
// optional qlweb dependencies (jquery and toastr) have been included in your index.html

// TODO fill with code

// example code:
QLITE.node_info(function (res, err) {
    if(res) // if no error
        toastr.success('You are running version ' + res['version'] + ' of the QLRI.');
});