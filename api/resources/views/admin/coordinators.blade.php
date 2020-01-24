@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Coordinators</div>
        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#exampleModal">
                    Add Coordinator
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Coordinator</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="{{ route('admin-post-coordinators') }}">
                                    @csrf
                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                        <div class="col-md-6">
                                            <input id="name" type="text" class="form-control " name="name" required autocomplete="name" autofocus>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Contact Number</label>
                                        <div class="col-md-6">
                                            <input id="name" type="number" class="form-control " name="contact_number" required autocomplete="name" autofocus>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="type" class="col-md-4 col-form-label text-md-right">Type</label>
                                        <div class="col-md-6">
                                            <select name="type" id="type" class="form-control">
                                                <option value="">--- Select zilla ---</option>
                                                <option value="normal">Normal</option>
                                                <option value="district">District</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row" id="crender" style="display: none">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Zilla Select</label>
                                        <div class="col-md-6">
                                            <select name="district_id" id="district_id" class="form-control">
                                                <option value="">--- Select zilla ---</option>
                                                @foreach($zillas as $c)
                                                    <option value="{{$c->id}}">{{$c->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="datatable mdl-data-table dataTable" cellspacing="0"
                       width="100%" role="grid" style="width: 100%;">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th>Zilla</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
        </div>
    </div>
@endsection
@section('script')
    <script>
        $(document).ready(function() {
            $('.datatable').DataTable({
                processing: true,
                serverSide: true,
                ajax: '{{ route('admin-coordinators-fetch') }}',
                "columns": [
                    {data: 'cid', name: 'cid'},
                    {data: 'cname', name: 'cname'},
                    {data: 'contact_number', name: 'contact_number'},
                    {data: 'zname', name: 'zname'},
                    {data: 'type', name: 'type'},
                    {
                        data: null,
                        defaultContent: '<a href="" class="editor_edit text-warning"><i class="fa fa-pencil"></i></a> &nbsp; <a href="" class="editor_remove text-danger"><i class="fa fa-trash"></i></a>'
                    }
                ],
                columnDefs: [{
                    targets: 'no_sort',
                    orderable: false,
                    className: 'mdl-data-table__cell--non-numeric'
                }]
            });
        });
        $('#type').on('change',function (e) {
            e.preventDefault();
            let value = $(this).val();
            if(value === 'district'){
                console.log(value);
                $('#crender').show();
            }else{
                $('#crender').hide();
            }
        })
    </script>
@endsection
