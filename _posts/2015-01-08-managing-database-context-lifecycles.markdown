---
layout: post
title:  "Managing Database Context Lifecycles"
date:   2015-01-08 23:00:00
categories: gnap update
excerpt: Managing your Entity Framework and NHibernate lifecycles just became easier.
---

Based on a great blog post by Mehdi El Gueddari titled *[Managing DbContext the right way with Entity Framework 6: an in-depth guide](http://mehdi.me/ambient-dbcontext-in-ef6/)*, which details a very solid approach on how to deal with Entity Framework DbContext lifecycle management, we set out to integrate his experiences into GNaP.

As of today, based on his work, we use two different versions in our projects today. An Entity Framework version and an NHibernate version.

We made some changes to the code to have a more consistent naming story between the two, making it easier to read both Entity Framework and NHibernate projects.

Have a look at our releases page to try it out:

  * [GNaP.Data.Scope.EntityFramework](https://github.com/infrabel/GNaP.Data.Scope.EntityFramework/releases) - [README](https://github.com/infrabel/GNaP.Data.Scope.EntityFramework/blob/master/README.md)
  * [GNaP.Data.Scope.NHibernate](https://github.com/infrabel/GNaP.Data.Scope.NHibernate/releases) - [README](https://github.com/infrabel/GNaP.Data.Scope.NHibernate/blob/master/README.md)

As usual, it's also available on NuGet:

<div class="command-line">
  <p>
    <code>
      PM> Install-Package GNaP.Data.Scope.EntityFramework
    </code>
  </p>
</div>

<div class="command-line">
  <p>
    <code>
      PM> Install-Package GNaP.Data.Scope.NHibernate
    </code>
  </p>
</div>
