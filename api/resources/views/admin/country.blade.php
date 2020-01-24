@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Country</div>

        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#exampleModal">
                    Add Country
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Country</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="{{ route('admin-post-country') }}">
                                    @csrf
                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Country Name</label>

                                        <div class="col-md-6">
                                            <input id="name" type="text" class="form-control" name="name"  required autocomplete="name" autofocus>
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
                        <th>Country</th>
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
                ajax: '{{ route('admin-country-fetch') }}',
                "columns": [
                    {data: 'id', name: 'id'},
                    {data: 'name', name: 'name'},
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
    </script>
@endsection
