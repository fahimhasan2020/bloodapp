@extends('admin.layouts.app')
@section('content')
    <div class="card">
        <div class="card-header">Ready Donors</div>

        <div class="card-body" style="overflow: scroll">
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
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Referrer Name</th>
                        <th>Referrer Contact</th>
                        <th>Blood Group</th>
                        <th>Donate date</th>
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
                ajax: '{{ route('admin-ready-donors-fetch') }}',
                "columns": [
                    {data: 'id', name: 'id'},
                    {data: 'name', name: 'name'},
                    {data: 'contact', name: 'contact'},
                    {data: 'address', name: 'address'},
                    {data: 'referrer_name', name: 'referrer_name'},
                    {data: 'referrer_contact', name: 'referrer_contact'},
                    {data: 'blood_group', name: 'blood_group'},
                    {data: 'donate_date', name: 'donate_date'},
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
