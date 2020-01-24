@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Organization</div>

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
                        <th>Name</th>
                        <th>Admin Nmae</th>
                        <th>Admin Contact</th>
                        <th>Zilla</th>
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
                ajax: '{{ route('admin-organization-fetch') }}',
                "columns": [
                    {data: 'oid', name: 'oid'},
                    {data: 'oname', name: 'oname'},
                    {data: 'admin_name', name: 'admin_name'},
                    {data: 'admin_contact', name: 'admin_contact'},
                    {data: 'zname', name: 'zname'},
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
