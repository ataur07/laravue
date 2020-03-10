<template>
    <div class="container">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">User List</h3>

                    <div class="card-tools">
                      <button class="btn btn-success" data-toggle="modal" data-target="#addNewUser">Add New <i class="fa fa-user-plus fa-fw"></i></button>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User Name</th>
                          <th>User Email</th>
                          <th>Created</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in users" :key="user.id">
                          <td>{{user.id}}</td>
                          <td>{{user.name |capitalize}}</td>
                          <td>{{user.email}}</td>
                          <td><span class="tag tag-success">{{user.created_at}}</span></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
                <!-- Modal -->
                <div class="modal fade" id="addNewUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <form @submit.prevent="createUser" @keydown="form.onKeydown($event)">
                      <div class="modal-body">
                        <div class="form-group">
                              <label>Name</label>
                              <input v-model="form.name" type="text" name="name"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                              <has-error :form="form" field="name"></has-error>
                        </div>

                        <div class="form-group">
                              <label>Email</label>
                              <input v-model="form.email" type="text" name="email"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                              <has-error :form="form" field="email"></has-error>
                        </div>

                        <div class="form-group">
                              <label>Password</label>
                              <input v-model="form.password" type="password" name="password"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                              <has-error :form="form" field="password"></has-error>
                        </div>

                        <div class="form-group">
                              <label>Confirm Password</label>
                              <input v-model="form.confirmed" type="password" name="confirmed"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('confirmed') }">
                              <has-error :form="form" field="confirmed"></has-error>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Create</button>
                      </div>
                      </form>
                    </div>

                  </div>
                </div>
                <!--/modal -->
          </div>
    </div>
</template>

<script>
    export default {
                  data () {
                  return {
                  users:{},
                    // Create a new form instance
                    form: new Form({
                      name: '',
                      email: '',
                      password: '',
                      confirmed: '',
                      remember_token: false
                    })
                  }
                },
                methods: {
                loadUsers(){
                  axios.get('api/user').then(({ data }) =>(this.users=data.data));
                },
                  createUser () {
                    // Submit the form via a POST request
                    this.form.post('api/user');
                  }
                },
        mounted() {
            this.loadUsers();
        }
    }
</script>
