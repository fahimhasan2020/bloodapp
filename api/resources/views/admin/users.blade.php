@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Users</div>

        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
                <table class="datatable mdl-data-table dataTable" cellspacing="0"
                       width="100%" role="grid" style="width: 100%;">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Contact</th>
                        <th>Name</th>
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
                ajax: '{{ route('admin-user-fetch') }}',
                "columns": [
                    {data: 'id', name: 'id'},
                    {data: 'email', name: 'email'},
                    {data: 'name', name: 'name'},
                    {data:'id',name:'id'}
                ],
                columnDefs: [{
                    targets: 3,
                    data: "id",
                    className: 'mdl-data-table__cell--non-numeric',
                    render: function ( data, type, row, meta ) {
                        return '<a href="/admin/users/delete/'+data+'"><i class="fa fa-trash"></i></a>';
                    }
                }]
            });
        });
    </script>
@endsection
