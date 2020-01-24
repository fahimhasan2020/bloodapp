@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Donors</div>

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
                        <th>name</th>
                        <th>contact</th>
                        <th>Country</th>
                        <th>District</th>
                        <th>City</th>
                        <th>Group</th>
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
                ajax: '{{ route('admin-donors-fetch') }}',
                "columns": [
                    {data: 'did', name: 'did'},
                    {data: 'dname', name: 'dname'},
                    {data: 'contact_number', name: 'contact_number'},
                    {data: 'cname', name: 'cname'},
                    {data: 'zname', name: 'zname'},
                    {data: 'uname', name: 'uname'},
                    {data: 'blood_group', name: 'blood_group'},
                    {
                        data: null,
                        defaultContent: '<a href="" class="editor_edit text-warning">' +
                            '<i class="fa fa-pencil"></i></a> &nbsp; ' +
                            '<a href="" class="editor_remove text-danger">' +
                            '<i class="fa fa-trash"></i></a>'
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
