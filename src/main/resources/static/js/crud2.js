var data = document.getElementById('data');
var userList = document.getElementById('userList');

// add user code
var counter = 0;
function addUser(){
  var inputdata = document.getElementById('data').value;
  var html =  '<div class="row" id="data'+counter+'" style="margin-bottom:15px;">'+
    '<div class="col-md-8 col-sm-12 col-xs-12">'+
      '<input type="text" class="form-control" value="'+inputdata+'" disabled>'+
    '</div>'+
    '<div class="col-md-4">'+
      '<button type="button" class="btn btn-warning mr-2" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
      '<button type="button" class="btn btn-primary mr-2" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
      '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
    '</div>'+
  '</div>';

  document.getElementById('userList').insertAdjacentHTML('beforeend', html);
    counter++;

}

function edit(editId){
  var parent =   document.getElementById(editId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.removeAttribute('disabled');
  console.log(child);
}

function update(updateId){
  var parent =   document.getElementById(updateId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled",'disabled');
  console.log(child);
}

function remove(deleteId){
  var parent =   document.getElementById(deleteId).parentNode.parentNode;
  parent.remove();
  console.log(parent);
}