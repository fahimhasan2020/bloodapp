@extends('admin.layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-center"><span class="text-danger text-capitalize">Privacy policy of CBGC Blood Groop App</span>
                </div>
                <div class="card-body text-center">
                    <img src="{{asset('img/playstore-icon.png')}}" height="250" width="250" alt="logo">
                    <hr>
                    <div class="text-left">
                        Cox's bazar blood donation club is a non profitable organization . We help people to manage blood for emergency purpose . We collect our user data so that our users can manage their required blood group when they need . Basically we dont track or list user location . We just make directory of user location . But almost all the data will be given by the users . Our targeted user location will be bangladesh . We help people to manage blood through our android app . It's a free system . The user need no money for using this system . But we shall show add in our system . Its completely safe to share users information with our app .
                        <ul>
                            <li>We don’t ask you for personal information unless we truly need it. (We can’t stand
                                services that ask you for things like your gender or income level for no apparent
                                reason.)
                            </li>
                            <li>We don’t share your personal information with anyone except to comply with the law or protect our rights.</li>
                            <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
                            <li>We aim to make it as simple as possible for you to control what’s visible to the public, seen by search engines, kept private, and permanently deleted.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
