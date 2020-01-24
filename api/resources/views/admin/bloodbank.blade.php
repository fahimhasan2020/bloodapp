@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Blood Bank</div>

        <div class="card-body" style="overflow-x: scroll">
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
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Country</th>
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
                ajax: '{{ route('admin-blood-bank-fetch') }}',
                "columns": [
                    {data: 'bid', name: 'bid'},
                    {data: 'bname', name: 'bname'},
                    {data: 'address', name: 'address'},
                    {data: 'contact_number', name: 'contact_number'},
                    {data: 'cname', name: 'cname'},
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
