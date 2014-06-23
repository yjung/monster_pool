




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>three.js/examples/js/controls/OrbitControls.js at master · mrdoob/three.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mrdoob/three.js" name="twitter:title" /><meta content="three.js - JavaScript 3D library." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/97088?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/97088?s=400" property="og:image" /><meta content="mrdoob/three.js" property="og:title" /><meta content="https://github.com/mrdoob/three.js" property="og:url" /><meta content="three.js - JavaScript 3D library." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C1AE1AB1:4017:F87D629:53A82AD5" name="octolytics-dimension-request_id" /><meta content="5737131" name="octolytics-actor-id" /><meta content="jaegermathias" name="octolytics-actor-login" /><meta content="735ce99963ea9acfc309ea94299b0e9fa909692652d9209c8543f011b74c23c2" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="tl98GJ2i77wrfT+/n0BUtv7w6wZHYWWq8OBYOm0DfzNxejEJYZ9VxYFaMtfspBFkeQSBFBgToOhrSPpSb3OaWA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-eb5c3c423cbc57fa389bbe6f9a4bb3a6ce0cf4cf.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-56e008b7d97b268cc33e7f96ed49822d7fc3367f.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="996bc2eb6e3462b6270ddd64255dc644">

      
  <meta name="description" content="three.js - JavaScript 3D library." />


  <meta content="97088" name="octolytics-dimension-user_id" /><meta content="mrdoob" name="octolytics-dimension-user_login" /><meta content="576201" name="octolytics-dimension-repository_id" /><meta content="mrdoob/three.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="576201" name="octolytics-dimension-repository_network_root_id" /><meta content="mrdoob/three.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mrdoob/three.js/commits/master.atom" rel="alternate" title="Recent Commits to three.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jaegermathias"
      data-repo="mrdoob/three.js"
      data-branch="master"
      data-sha="ff796a57a584ec8aab1f4d24b82b1f98493bc3fd"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mrdoob/three.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jaegermathias" class="name">
        <img alt="Jaeger" class=" js-avatar" data-user="5737131" height="20" src="https://avatars2.githubusercontent.com/u/5737131?s=140" width="20" /> jaegermathias
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="mrdoob/three.js">This repository</span>
    </li>
      <li>
        <a href="/mrdoob/three.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="FxbT4Ypwq6qpq+N0HjYg/hYZRFgJEw4uUfkCt7jJdXbe8Ji1uSA8TTvCxTei6lFpOHQ5Rh95SPIbo/wWTtuMCg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="576201" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mrdoob/three.js/watchers">
        1,113
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/mrdoob/three.js/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="MuHwtqJ4OeD4WtMR5cZ8KCPyl4XNb5LUQJAjwDx1jmTxZRnZsmhSSdduHvacWeFKSUXWidDhvnTntlq2Q2WiRg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar mrdoob/three.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mrdoob/three.js/stargazers">
          15,534
        </a>
</form>
    <form accept-charset="UTF-8" action="/mrdoob/three.js/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="mOUJ5F1Hd7ojKQ04fScNs3bJr4FdLMZNGKzLCPpz8Gol0k76+IMnXZ43JQK0gi9f6oZYJXRLqHjp3Fd85XdCiQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star mrdoob/three.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/mrdoob/three.js/stargazers">
          15,534
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/mrdoob/three.js/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of mrdoob/three.js to your account" aria-label="Fork your own copy of mrdoob/three.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/mrdoob/three.js/network" class="social-count">4,158</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mrdoob" class="url fn" itemprop="url" rel="author"><span itemprop="title">mrdoob</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mrdoob/three.js" class="js-current-repository js-repo-home-link">three.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mrdoob/three.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mrdoob/three.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mrdoob/three.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /mrdoob/three.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>470</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mrdoob/three.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mrdoob/three.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>63</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/mrdoob/three.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /mrdoob/three.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mrdoob/three.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mrdoob/three.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mrdoob/three.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mrdoob/three.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/mrdoob/three.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /mrdoob/three.js/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mrdoob/three.js.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mrdoob/three.js.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:mrdoob/three.js.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mrdoob/three.js.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mrdoob/three.js" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mrdoob/three.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/mrdoob/three.js" class="minibutton sidebar-button" title="Save mrdoob/three.js to your computer and use it in GitHub Desktop." aria-label="Save mrdoob/three.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/mrdoob/three.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mrdoob/three.js as a zip file"
                   title="Download mrdoob/three.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/mrdoob/three.js/blob/d3cb4e7cfb6b917c1e4f60856c71775d632067d9/examples/js/controls/OrbitControls.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:535b82ff0552724b8673a7c3435b595a -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.js"
                 data-name="dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev">dev</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/gh-pages/examples/js/controls/OrbitControls.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r67/examples/js/controls/OrbitControls.js"
                 data-name="r67"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r67">r67</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r66/examples/js/controls/OrbitControls.js"
                 data-name="r66"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r66">r66</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r65/examples/js/controls/OrbitControls.js"
                 data-name="r65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r65">r65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r64/examples/js/controls/OrbitControls.js"
                 data-name="r64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r64">r64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r63/examples/js/controls/OrbitControls.js"
                 data-name="r63"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r63">r63</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r62/examples/js/controls/OrbitControls.js"
                 data-name="r62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r62">r62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r61/examples/js/controls/OrbitControls.js"
                 data-name="r61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r61">r61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r60/examples/js/controls/OrbitControls.js"
                 data-name="r60"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r60">r60</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r59/examples/js/controls/OrbitControls.js"
                 data-name="r59"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r59">r59</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r58/examples/js/controls/OrbitControls.js"
                 data-name="r58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r58">r58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r57/examples/js/controls/OrbitControls.js"
                 data-name="r57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r57">r57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r56/examples/js/controls/OrbitControls.js"
                 data-name="r56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r56">r56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r55/examples/js/controls/OrbitControls.js"
                 data-name="r55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r55">r55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r54/examples/js/controls/OrbitControls.js"
                 data-name="r54"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r54">r54</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r53/examples/js/controls/OrbitControls.js"
                 data-name="r53"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r53">r53</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r52/examples/js/controls/OrbitControls.js"
                 data-name="r52"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r52">r52</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r51/examples/js/controls/OrbitControls.js"
                 data-name="r51"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r51">r51</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r50/examples/js/controls/OrbitControls.js"
                 data-name="r50"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r50">r50</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r49/examples/js/controls/OrbitControls.js"
                 data-name="r49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r49">r49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r48/examples/js/controls/OrbitControls.js"
                 data-name="r48"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r48">r48</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r47/examples/js/controls/OrbitControls.js"
                 data-name="r47"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r47">r47</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r46/examples/js/controls/OrbitControls.js"
                 data-name="r46"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r46">r46</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r45/examples/js/controls/OrbitControls.js"
                 data-name="r45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r45">r45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r44/examples/js/controls/OrbitControls.js"
                 data-name="r44"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r44">r44</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r43/examples/js/controls/OrbitControls.js"
                 data-name="r43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r43">r43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r42/examples/js/controls/OrbitControls.js"
                 data-name="r42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r42">r42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r41/ROME/examples/js/controls/OrbitControls.js"
                 data-name="r41/ROME"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r41/ROME">r41/ROME</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r40/examples/js/controls/OrbitControls.js"
                 data-name="r40"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r40">r40</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r39/examples/js/controls/OrbitControls.js"
                 data-name="r39"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r39">r39</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r38/examples/js/controls/OrbitControls.js"
                 data-name="r38"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r38">r38</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r37/examples/js/controls/OrbitControls.js"
                 data-name="r37"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r37">r37</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r36/examples/js/controls/OrbitControls.js"
                 data-name="r36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r36">r36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r35/examples/js/controls/OrbitControls.js"
                 data-name="r35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r35">r35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r34/examples/js/controls/OrbitControls.js"
                 data-name="r34"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r34">r34</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r33/examples/js/controls/OrbitControls.js"
                 data-name="r33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r33">r33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r32/examples/js/controls/OrbitControls.js"
                 data-name="r32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r32">r32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r31/examples/js/controls/OrbitControls.js"
                 data-name="r31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r31">r31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r30/examples/js/controls/OrbitControls.js"
                 data-name="r30"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r30">r30</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r29/examples/js/controls/OrbitControls.js"
                 data-name="r29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r29">r29</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r28/examples/js/controls/OrbitControls.js"
                 data-name="r28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r28">r28</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r25/examples/js/controls/OrbitControls.js"
                 data-name="r25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r25">r25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r18/examples/js/controls/OrbitControls.js"
                 data-name="r18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r18">r18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r17/examples/js/controls/OrbitControls.js"
                 data-name="r17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r17">r17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r16/examples/js/controls/OrbitControls.js"
                 data-name="r16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r16">r16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r15/examples/js/controls/OrbitControls.js"
                 data-name="r15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r15">r15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r14/examples/js/controls/OrbitControls.js"
                 data-name="r14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r14">r14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r13/examples/js/controls/OrbitControls.js"
                 data-name="r13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r13">r13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r12/examples/js/controls/OrbitControls.js"
                 data-name="r12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r12">r12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r11/examples/js/controls/OrbitControls.js"
                 data-name="r11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r11">r11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r10/examples/js/controls/OrbitControls.js"
                 data-name="r10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r10">r10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r9/examples/js/controls/OrbitControls.js"
                 data-name="r9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r9">r9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r8/examples/js/controls/OrbitControls.js"
                 data-name="r8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r8">r8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r7/examples/js/controls/OrbitControls.js"
                 data-name="r7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r7">r7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r6/examples/js/controls/OrbitControls.js"
                 data-name="r6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r6">r6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r5/examples/js/controls/OrbitControls.js"
                 data-name="r5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r5">r5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r4/examples/js/controls/OrbitControls.js"
                 data-name="r4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r4">r4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r3/examples/js/controls/OrbitControls.js"
                 data-name="r3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r3">r3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r2/examples/js/controls/OrbitControls.js"
                 data-name="r2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r2">r2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r1/examples/js/controls/OrbitControls.js"
                 data-name="r1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r1">r1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/mrdoob/three.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="examples/js/controls/OrbitControls.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">three.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples/js/controls" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">controls</span></a></span><span class="separator"> / </span><strong class="final-path">OrbitControls.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Mr.doob" class="main-avatar js-avatar" data-user="97088" height="24" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="24" />
      <span class="author"><a href="/mrdoob" rel="author">mrdoob</a></span>
      <time datetime="2014-03-28T13:49:44-07:00" is="relative-time">March 28, 2014</time>
      <div class="commit-title">
          <a href="/mrdoob/three.js/commit/8ee7da2efea5839463968ba268e557ebae9417da" class="message" data-pjax="true" title="OrbitControls: Added stopPropagation as per afaff8207b42bf475acb383a171fbeec1e5b0a77. Fixes #4229.">OrbitControls: Added stopPropagation as per</a> <a href="https://github.com/mrdoob/three.js/commit/afaff8207b42bf475acb383a171fbeec1e5b0a77" class="commit-link"><tt>afaff82</tt></a><a href="/mrdoob/three.js/commit/8ee7da2efea5839463968ba268e557ebae9417da" class="message" data-pjax="true" title="OrbitControls: Added stopPropagation as per afaff8207b42bf475acb383a171fbeec1e5b0a77. Fixes #4229.">. Fixes</a> <a href="https://github.com/mrdoob/three.js/pull/4229" class="issue-link" title="Fixed zooming with scroll: it doesn't scroll the page now">#4229</a><a href="/mrdoob/three.js/commit/8ee7da2efea5839463968ba268e557ebae9417da" class="message" data-pjax="true" title="OrbitControls: Added stopPropagation as per afaff8207b42bf475acb383a171fbeec1e5b0a77. Fixes #4229.">.</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mrdoob" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=mrdoob"><img alt="Mr.doob" class=" js-avatar" data-user="97088" height="20" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="WestLangley" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=WestLangley"><img alt="WestLangley" class=" js-avatar" data-user="1000017" height="20" src="https://avatars3.githubusercontent.com/u/1000017?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="erich666" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=erich666"><img alt="Eric Haines" class=" js-avatar" data-user="803995" height="20" src="https://avatars0.githubusercontent.com/u/803995?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jasongrout" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=jasongrout"><img alt="Jason Grout" class=" js-avatar" data-user="192614" height="20" src="https://avatars2.githubusercontent.com/u/192614?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jbaicoianu" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=jbaicoianu"><img alt="James Baicoianu" class=" js-avatar" data-user="251610" height="20" src="https://avatars1.githubusercontent.com/u/251610?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="benbro" href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js?author=benbro"><img alt="benbro" class=" js-avatar" data-user="75841" height="20" src="https://avatars0.githubusercontent.com/u/75841?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mr.doob" class=" js-avatar" data-user="97088" height="24" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="24" />
            <a href="/mrdoob">mrdoob</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="WestLangley" class=" js-avatar" data-user="1000017" height="24" src="https://avatars3.githubusercontent.com/u/1000017?s=140" width="24" />
            <a href="/WestLangley">WestLangley</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Eric Haines" class=" js-avatar" data-user="803995" height="24" src="https://avatars0.githubusercontent.com/u/803995?s=140" width="24" />
            <a href="/erich666">erich666</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jason Grout" class=" js-avatar" data-user="192614" height="24" src="https://avatars2.githubusercontent.com/u/192614?s=140" width="24" />
            <a href="/jasongrout">jasongrout</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="James Baicoianu" class=" js-avatar" data-user="251610" height="24" src="https://avatars1.githubusercontent.com/u/251610?s=140" width="24" />
            <a href="/jbaicoianu">jbaicoianu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="benbro" class=" js-avatar" data-user="75841" height="24" src="https://avatars0.githubusercontent.com/u/75841?s=140" width="24" />
            <a href="/benbro">benbro</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>641 lines (391 sloc)</span>
          <span class="meta-divider"></span>
        <span>14.901 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/mrdoob/three.js?branch=master&amp;filepath=examples%2Fjs%2Fcontrols%2FOrbitControls.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mrdoob/three.js/edit/master/examples/js/controls/OrbitControls.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mrdoob/three.js/raw/master/examples/js/controls/OrbitControls.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/mrdoob/three.js/blame/master/examples/js/controls/OrbitControls.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/mrdoob/three.js/commits/master/examples/js/controls/OrbitControls.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/mrdoob/three.js/delete/master/examples/js/controls/OrbitControls.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @author qiao / https://github.com/qiao</span></div><div class='line' id='LC3'><span class="cm"> * @author mrdoob / http://mrdoob.com</span></div><div class='line' id='LC4'><span class="cm"> * @author alteredq / http://alteredqualia.com/</span></div><div class='line' id='LC5'><span class="cm"> * @author WestLangley / http://github.com/WestLangley</span></div><div class='line' id='LC6'><span class="cm"> * @author erich666 / http://erichaines.com</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="cm">/*global THREE, console */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="c1">// This set of controls performs orbiting, dollying (zooming), and panning. It maintains</span></div><div class='line' id='LC11'><span class="c1">// the &quot;up&quot; direction as +Y, unlike the TrackballControls. Touch on tablet and phones is</span></div><div class='line' id='LC12'><span class="c1">// supported.</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">//    Orbit - left mouse / touch: one finger move</span></div><div class='line' id='LC15'><span class="c1">//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish</span></div><div class='line' id='LC16'><span class="c1">//    Pan - right mouse, or arrow keys / touch: three finter swipe</span></div><div class='line' id='LC17'><span class="c1">//</span></div><div class='line' id='LC18'><span class="c1">// This is a drop-in replacement for (most) TrackballControls used in examples.</span></div><div class='line' id='LC19'><span class="c1">// That is, include this js file and wherever you see:</span></div><div class='line' id='LC20'><span class="c1">//    	controls = new THREE.TrackballControls( camera );</span></div><div class='line' id='LC21'><span class="c1">//      controls.target.z = 150;</span></div><div class='line' id='LC22'><span class="c1">// Simple substitute &quot;OrbitControls&quot; and the control should work as-is.</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="nx">THREE</span><span class="p">.</span><span class="nx">OrbitControls</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">object</span><span class="p">,</span> <span class="nx">domElement</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>	<span class="k">this</span><span class="p">.</span><span class="nx">object</span> <span class="o">=</span> <span class="nx">object</span><span class="p">;</span></div><div class='line' id='LC27'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">domElement</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">domElement</span> <span class="o">:</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	<span class="c1">// API</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>	<span class="c1">// Set to false to disable this control</span></div><div class='line' id='LC32'>	<span class="k">this</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="c1">// &quot;target&quot; sets the location of focus, where the control orbits around</span></div><div class='line' id='LC35'>	<span class="c1">// and where it pans with respect to.</span></div><div class='line' id='LC36'>	<span class="k">this</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">();</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>	<span class="c1">// center is old, deprecated; use &quot;target&quot; instead</span></div><div class='line' id='LC39'>	<span class="k">this</span><span class="p">.</span><span class="nx">center</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>	<span class="c1">// This option actually enables dollying in and out; left as &quot;zoom&quot; for</span></div><div class='line' id='LC42'>	<span class="c1">// backwards compatibility</span></div><div class='line' id='LC43'>	<span class="k">this</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC44'>	<span class="k">this</span><span class="p">.</span><span class="nx">zoomSpeed</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>	<span class="c1">// Limits to how far you can dolly in and out</span></div><div class='line' id='LC47'>	<span class="k">this</span><span class="p">.</span><span class="nx">minDistance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC48'>	<span class="k">this</span><span class="p">.</span><span class="nx">maxDistance</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>	<span class="c1">// Set to true to disable this control</span></div><div class='line' id='LC51'>	<span class="k">this</span><span class="p">.</span><span class="nx">noRotate</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC52'>	<span class="k">this</span><span class="p">.</span><span class="nx">rotateSpeed</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>	<span class="c1">// Set to true to disable this control</span></div><div class='line' id='LC55'>	<span class="k">this</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC56'>	<span class="k">this</span><span class="p">.</span><span class="nx">keyPanSpeed</span> <span class="o">=</span> <span class="mf">7.0</span><span class="p">;</span>	<span class="c1">// pixels moved per arrow key push</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>	<span class="c1">// Set to true to automatically rotate around the target</span></div><div class='line' id='LC59'>	<span class="k">this</span><span class="p">.</span><span class="nx">autoRotate</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC60'>	<span class="k">this</span><span class="p">.</span><span class="nx">autoRotateSpeed</span> <span class="o">=</span> <span class="mf">2.0</span><span class="p">;</span> <span class="c1">// 30 seconds per round when fps is 60</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>	<span class="c1">// How far you can orbit vertically, upper and lower limits.</span></div><div class='line' id='LC63'>	<span class="c1">// Range is 0 to Math.PI radians.</span></div><div class='line' id='LC64'>	<span class="k">this</span><span class="p">.</span><span class="nx">minPolarAngle</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// radians</span></div><div class='line' id='LC65'>	<span class="k">this</span><span class="p">.</span><span class="nx">maxPolarAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span> <span class="c1">// radians</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="c1">// Set to true to disable use of the keys</span></div><div class='line' id='LC68'>	<span class="k">this</span><span class="p">.</span><span class="nx">noKeys</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="c1">// The four arrow keys</span></div><div class='line' id='LC71'>	<span class="k">this</span><span class="p">.</span><span class="nx">keys</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">LEFT</span><span class="o">:</span> <span class="mi">37</span><span class="p">,</span> <span class="nx">UP</span><span class="o">:</span> <span class="mi">38</span><span class="p">,</span> <span class="nx">RIGHT</span><span class="o">:</span> <span class="mi">39</span><span class="p">,</span> <span class="nx">BOTTOM</span><span class="o">:</span> <span class="mi">40</span> <span class="p">};</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="c1">////////////</span></div><div class='line' id='LC74'>	<span class="c1">// internals</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>	<span class="kd">var</span> <span class="nx">scope</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>	<span class="kd">var</span> <span class="nx">EPS</span> <span class="o">=</span> <span class="mf">0.000001</span><span class="p">;</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>	<span class="kd">var</span> <span class="nx">rotateStart</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC81'>	<span class="kd">var</span> <span class="nx">rotateEnd</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC82'>	<span class="kd">var</span> <span class="nx">rotateDelta</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>	<span class="kd">var</span> <span class="nx">panStart</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC85'>	<span class="kd">var</span> <span class="nx">panEnd</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC86'>	<span class="kd">var</span> <span class="nx">panDelta</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC87'>	<span class="kd">var</span> <span class="nx">panOffset</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">();</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>	<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">();</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>	<span class="kd">var</span> <span class="nx">dollyStart</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC92'>	<span class="kd">var</span> <span class="nx">dollyEnd</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC93'>	<span class="kd">var</span> <span class="nx">dollyDelta</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">();</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="kd">var</span> <span class="nx">phiDelta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC96'>	<span class="kd">var</span> <span class="nx">thetaDelta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC97'>	<span class="kd">var</span> <span class="nx">scale</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC98'>	<span class="kd">var</span> <span class="nx">pan</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">();</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>	<span class="kd">var</span> <span class="nx">lastPosition</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">();</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>	<span class="kd">var</span> <span class="nx">STATE</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">NONE</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">ROTATE</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">DOLLY</span> <span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">PAN</span> <span class="o">:</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">TOUCH_ROTATE</span> <span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">TOUCH_DOLLY</span> <span class="o">:</span> <span class="mi">4</span><span class="p">,</span> <span class="nx">TOUCH_PAN</span> <span class="o">:</span> <span class="mi">5</span> <span class="p">};</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>	<span class="kd">var</span> <span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>	<span class="c1">// for reset</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>	<span class="k">this</span><span class="p">.</span><span class="nx">target0</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC109'>	<span class="k">this</span><span class="p">.</span><span class="nx">position0</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>	<span class="c1">// so camera.up is the orbit axis</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>	<span class="kd">var</span> <span class="nx">quat</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Quaternion</span><span class="p">().</span><span class="nx">setFromUnitVectors</span><span class="p">(</span> <span class="nx">object</span><span class="p">.</span><span class="nx">up</span><span class="p">,</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC114'>	<span class="kd">var</span> <span class="nx">quatInverse</span> <span class="o">=</span> <span class="nx">quat</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">inverse</span><span class="p">();</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>	<span class="c1">// events</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>	<span class="kd">var</span> <span class="nx">changeEvent</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;change&#39;</span> <span class="p">};</span></div><div class='line' id='LC119'>	<span class="kd">var</span> <span class="nx">startEvent</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;start&#39;</span><span class="p">};</span></div><div class='line' id='LC120'>	<span class="kd">var</span> <span class="nx">endEvent</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;end&#39;</span><span class="p">};</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="k">this</span><span class="p">.</span><span class="nx">rotateLeft</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">angle</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">angle</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>			<span class="nx">angle</span> <span class="o">=</span> <span class="nx">getAutoRotationAngle</span><span class="p">();</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>		<span class="p">}</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>		<span class="nx">thetaDelta</span> <span class="o">-=</span> <span class="nx">angle</span><span class="p">;</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>	<span class="p">};</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>	<span class="k">this</span><span class="p">.</span><span class="nx">rotateUp</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">angle</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">angle</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>			<span class="nx">angle</span> <span class="o">=</span> <span class="nx">getAutoRotationAngle</span><span class="p">();</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>		<span class="p">}</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		<span class="nx">phiDelta</span> <span class="o">-=</span> <span class="nx">angle</span><span class="p">;</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>	<span class="p">};</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>	<span class="c1">// pass in distance in world space to move left</span></div><div class='line' id='LC147'>	<span class="k">this</span><span class="p">.</span><span class="nx">panLeft</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">distance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>		<span class="kd">var</span> <span class="nx">te</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">matrix</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>		<span class="c1">// get X column of matrix</span></div><div class='line' id='LC152'>		<span class="nx">panOffset</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">1</span> <span class="p">],</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">2</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC153'>		<span class="nx">panOffset</span><span class="p">.</span><span class="nx">multiplyScalar</span><span class="p">(</span> <span class="o">-</span> <span class="nx">distance</span> <span class="p">);</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>		<span class="nx">pan</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">panOffset</span> <span class="p">);</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>	<span class="p">};</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>	<span class="c1">// pass in distance in world space to move up</span></div><div class='line' id='LC160'>	<span class="k">this</span><span class="p">.</span><span class="nx">panUp</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">distance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>		<span class="kd">var</span> <span class="nx">te</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">matrix</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>		<span class="c1">// get Y column of matrix</span></div><div class='line' id='LC165'>		<span class="nx">panOffset</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">4</span> <span class="p">],</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">5</span> <span class="p">],</span> <span class="nx">te</span><span class="p">[</span> <span class="mi">6</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC166'>		<span class="nx">panOffset</span><span class="p">.</span><span class="nx">multiplyScalar</span><span class="p">(</span> <span class="nx">distance</span> <span class="p">);</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="nx">pan</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">panOffset</span> <span class="p">);</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>	<span class="p">};</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>	<span class="c1">// pass in x,y of change desired in pixel space,</span></div><div class='line' id='LC173'>	<span class="c1">// right and down are positive</span></div><div class='line' id='LC174'>	<span class="k">this</span><span class="p">.</span><span class="nx">pan</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">deltaX</span><span class="p">,</span> <span class="nx">deltaY</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>		<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span> <span class="o">===</span> <span class="nb">document</span> <span class="o">?</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">body</span> <span class="o">:</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">;</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">fov</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>			<span class="c1">// perspective</span></div><div class='line' id='LC181'>			<span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span><span class="p">;</span></div><div class='line' id='LC182'>			<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nx">position</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">sub</span><span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">target</span> <span class="p">);</span></div><div class='line' id='LC183'>			<span class="kd">var</span> <span class="nx">targetDistance</span> <span class="o">=</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">length</span><span class="p">();</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>			<span class="c1">// half of the fov is center to top of screen</span></div><div class='line' id='LC186'>			<span class="nx">targetDistance</span> <span class="o">*=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">tan</span><span class="p">(</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">fov</span> <span class="o">/</span> <span class="mi">2</span> <span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mf">180.0</span> <span class="p">);</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>			<span class="c1">// we actually don&#39;t use screenWidth, since perspective camera is fixed to screen height</span></div><div class='line' id='LC189'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">panLeft</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">deltaX</span> <span class="o">*</span> <span class="nx">targetDistance</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span> <span class="p">);</span></div><div class='line' id='LC190'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">panUp</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">deltaY</span> <span class="o">*</span> <span class="nx">targetDistance</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span> <span class="p">);</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">top</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>			<span class="c1">// orthographic</span></div><div class='line' id='LC195'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">panLeft</span><span class="p">(</span> <span class="nx">deltaX</span> <span class="o">*</span> <span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">right</span> <span class="o">-</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">left</span><span class="p">)</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientWidth</span> <span class="p">);</span></div><div class='line' id='LC196'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">panUp</span><span class="p">(</span> <span class="nx">deltaY</span> <span class="o">*</span> <span class="p">(</span><span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">bottom</span><span class="p">)</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span> <span class="p">);</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>			<span class="c1">// camera neither orthographic or perspective</span></div><div class='line' id='LC201'>			<span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.&#39;</span> <span class="p">);</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>		<span class="p">}</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>	<span class="p">};</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>	<span class="k">this</span><span class="p">.</span><span class="nx">dollyIn</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">dollyScale</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">dollyScale</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>			<span class="nx">dollyScale</span> <span class="o">=</span> <span class="nx">getZoomScale</span><span class="p">();</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>		<span class="p">}</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>		<span class="nx">scale</span> <span class="o">/=</span> <span class="nx">dollyScale</span><span class="p">;</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>	<span class="p">};</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>	<span class="k">this</span><span class="p">.</span><span class="nx">dollyOut</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">dollyScale</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">dollyScale</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>			<span class="nx">dollyScale</span> <span class="o">=</span> <span class="nx">getZoomScale</span><span class="p">();</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>		<span class="p">}</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>		<span class="nx">scale</span> <span class="o">*=</span> <span class="nx">dollyScale</span><span class="p">;</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>	<span class="p">};</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>	<span class="k">this</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>		<span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span><span class="p">;</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">position</span> <span class="p">).</span><span class="nx">sub</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">target</span> <span class="p">);</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>		<span class="c1">// rotate offset to &quot;y-axis-is-up&quot; space</span></div><div class='line' id='LC238'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">applyQuaternion</span><span class="p">(</span> <span class="nx">quat</span> <span class="p">);</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>		<span class="c1">// angle from z-axis around y-axis</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>		<span class="kd">var</span> <span class="nx">theta</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">atan2</span><span class="p">(</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">z</span> <span class="p">);</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>		<span class="c1">// angle from y-axis</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>		<span class="kd">var</span> <span class="nx">phi</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">atan2</span><span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">z</span> <span class="o">*</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">z</span> <span class="p">),</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">y</span> <span class="p">);</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>		<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">autoRotate</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>			<span class="k">this</span><span class="p">.</span><span class="nx">rotateLeft</span><span class="p">(</span> <span class="nx">getAutoRotationAngle</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>		<span class="p">}</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>		<span class="nx">theta</span> <span class="o">+=</span> <span class="nx">thetaDelta</span><span class="p">;</span></div><div class='line' id='LC255'>		<span class="nx">phi</span> <span class="o">+=</span> <span class="nx">phiDelta</span><span class="p">;</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>		<span class="c1">// restrict phi to be between desired limits</span></div><div class='line' id='LC258'>		<span class="nx">phi</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">minPolarAngle</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxPolarAngle</span><span class="p">,</span> <span class="nx">phi</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>		<span class="c1">// restrict phi to be betwee EPS and PI-EPS</span></div><div class='line' id='LC261'>		<span class="nx">phi</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="nx">EPS</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">-</span> <span class="nx">EPS</span><span class="p">,</span> <span class="nx">phi</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>		<span class="kd">var</span> <span class="nx">radius</span> <span class="o">=</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">length</span><span class="p">()</span> <span class="o">*</span> <span class="nx">scale</span><span class="p">;</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>		<span class="c1">// restrict radius to be between desired limits</span></div><div class='line' id='LC266'>		<span class="nx">radius</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">minDistance</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxDistance</span><span class="p">,</span> <span class="nx">radius</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>		<span class="c1">// move target to panned location</span></div><div class='line' id='LC269'>		<span class="k">this</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">pan</span> <span class="p">);</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">radius</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span> <span class="nx">phi</span> <span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span> <span class="nx">theta</span> <span class="p">);</span></div><div class='line' id='LC272'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">radius</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span> <span class="nx">phi</span> <span class="p">);</span></div><div class='line' id='LC273'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="nx">radius</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span> <span class="nx">phi</span> <span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span> <span class="nx">theta</span> <span class="p">);</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>		<span class="c1">// rotate offset back to &quot;camera-up-vector-is-up&quot; space</span></div><div class='line' id='LC276'>		<span class="nx">offset</span><span class="p">.</span><span class="nx">applyQuaternion</span><span class="p">(</span> <span class="nx">quatInverse</span> <span class="p">);</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>		<span class="nx">position</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">target</span> <span class="p">).</span><span class="nx">add</span><span class="p">(</span> <span class="nx">offset</span> <span class="p">);</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>		<span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">lookAt</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">target</span> <span class="p">);</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>		<span class="nx">thetaDelta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC283'>		<span class="nx">phiDelta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC284'>		<span class="nx">scale</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC285'>		<span class="nx">pan</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">lastPosition</span><span class="p">.</span><span class="nx">distanceToSquared</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="nx">EPS</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>			<span class="k">this</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">changeEvent</span> <span class="p">);</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>			<span class="nx">lastPosition</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span> <span class="p">);</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>		<span class="p">}</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>	<span class="p">};</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>	<span class="k">this</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>		<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>		<span class="k">this</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">target0</span> <span class="p">);</span></div><div class='line' id='LC303'>		<span class="k">this</span><span class="p">.</span><span class="nx">object</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">position0</span> <span class="p">);</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>		<span class="k">this</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>	<span class="p">};</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>	<span class="kd">function</span> <span class="nx">getAutoRotationAngle</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>		<span class="k">return</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">60</span> <span class="o">/</span> <span class="mi">60</span> <span class="o">*</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">autoRotateSpeed</span><span class="p">;</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>	<span class="p">}</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>	<span class="kd">function</span> <span class="nx">getZoomScale</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span> <span class="mf">0.95</span><span class="p">,</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">zoomSpeed</span> <span class="p">);</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>	<span class="p">}</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>	<span class="kd">function</span> <span class="nx">onMouseDown</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC324'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">button</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noRotate</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>			<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">ROTATE</span><span class="p">;</span></div><div class='line' id='LC330'><br/></div><div class='line' id='LC331'>			<span class="nx">rotateStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">button</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC334'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>			<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">DOLLY</span><span class="p">;</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>			<span class="nx">dollyStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">button</span> <span class="o">===</span> <span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC341'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>			<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">PAN</span><span class="p">;</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>			<span class="nx">panStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>		<span class="p">}</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;mousemove&#39;</span><span class="p">,</span> <span class="nx">onMouseMove</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC350'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;mouseup&#39;</span><span class="p">,</span> <span class="nx">onMouseUp</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC351'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">startEvent</span> <span class="p">);</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>	<span class="p">}</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>	<span class="kd">function</span> <span class="nx">onMouseMove</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>		<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span> <span class="o">===</span> <span class="nb">document</span> <span class="o">?</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">body</span> <span class="o">:</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">;</span></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">===</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">ROTATE</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noRotate</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>			<span class="nx">rotateEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC368'>			<span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">rotateEnd</span><span class="p">,</span> <span class="nx">rotateStart</span> <span class="p">);</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>			<span class="c1">// rotating across whole screen goes 360 degrees around</span></div><div class='line' id='LC371'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">rotateLeft</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">x</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientWidth</span> <span class="o">*</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">rotateSpeed</span> <span class="p">);</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>			<span class="c1">// rotating up and down along whole screen attempts to go 360, but limited to 180</span></div><div class='line' id='LC374'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">rotateUp</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">y</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span> <span class="o">*</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">rotateSpeed</span> <span class="p">);</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>			<span class="nx">rotateStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">rotateEnd</span> <span class="p">);</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">===</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">DOLLY</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>			<span class="nx">dollyEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC383'>			<span class="nx">dollyDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">dollyEnd</span><span class="p">,</span> <span class="nx">dollyStart</span> <span class="p">);</span></div><div class='line' id='LC384'><br/></div><div class='line' id='LC385'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">dollyDelta</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyIn</span><span class="p">();</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyOut</span><span class="p">();</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>			<span class="p">}</span></div><div class='line' id='LC394'><br/></div><div class='line' id='LC395'>			<span class="nx">dollyStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">dollyEnd</span> <span class="p">);</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">===</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">PAN</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>			<span class="nx">panEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">clientY</span> <span class="p">);</span></div><div class='line' id='LC402'>			<span class="nx">panDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">panEnd</span><span class="p">,</span> <span class="nx">panStart</span> <span class="p">);</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="nx">panDelta</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">panDelta</span><span class="p">.</span><span class="nx">y</span> <span class="p">);</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>			<span class="nx">panStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">panEnd</span> <span class="p">);</span></div><div class='line' id='LC407'><br/></div><div class='line' id='LC408'>		<span class="p">}</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>	<span class="p">}</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'>	<span class="kd">function</span> <span class="nx">onMouseUp</span><span class="p">(</span> <span class="cm">/* event */</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="s1">&#39;mousemove&#39;</span><span class="p">,</span> <span class="nx">onMouseMove</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC419'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="s1">&#39;mouseup&#39;</span><span class="p">,</span> <span class="nx">onMouseUp</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC420'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">endEvent</span> <span class="p">);</span></div><div class='line' id='LC421'>		<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'>	<span class="p">}</span></div><div class='line' id='LC424'><br/></div><div class='line' id='LC425'>	<span class="kd">function</span> <span class="nx">onMouseWheel</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC430'>		<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>		<span class="kd">var</span> <span class="nx">delta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">wheelDelta</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span> <span class="c1">// WebKit / Opera / Explorer 9</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>			<span class="nx">delta</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">;</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">detail</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span> <span class="c1">// Firefox</span></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'>			<span class="nx">delta</span> <span class="o">=</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">detail</span><span class="p">;</span></div><div class='line' id='LC441'><br/></div><div class='line' id='LC442'>		<span class="p">}</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">delta</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyOut</span><span class="p">();</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyIn</span><span class="p">();</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>		<span class="p">}</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC455'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">startEvent</span> <span class="p">);</span></div><div class='line' id='LC456'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">endEvent</span> <span class="p">);</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'>	<span class="p">}</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>	<span class="kd">function</span> <span class="nx">onKeyDown</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noKeys</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC463'><br/></div><div class='line' id='LC464'>		<span class="k">switch</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>			<span class="k">case</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keys</span><span class="p">.</span><span class="nx">UP</span><span class="o">:</span></div><div class='line' id='LC467'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keyPanSpeed</span> <span class="p">);</span></div><div class='line' id='LC468'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC469'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>			<span class="k">case</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keys</span><span class="p">.</span><span class="nx">BOTTOM</span><span class="o">:</span></div><div class='line' id='LC472'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="o">-</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keyPanSpeed</span> <span class="p">);</span></div><div class='line' id='LC473'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC474'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'>			<span class="k">case</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keys</span><span class="p">.</span><span class="nx">LEFT</span><span class="o">:</span></div><div class='line' id='LC477'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keyPanSpeed</span><span class="p">,</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC478'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC479'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>			<span class="k">case</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keys</span><span class="p">.</span><span class="nx">RIGHT</span><span class="o">:</span></div><div class='line' id='LC482'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="o">-</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">keyPanSpeed</span><span class="p">,</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC483'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC484'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>		<span class="p">}</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>	<span class="p">}</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>	<span class="kd">function</span> <span class="nx">touchstart</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC493'><br/></div><div class='line' id='LC494'>		<span class="k">switch</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>			<span class="k">case</span> <span class="mi">1</span><span class="o">:</span>	<span class="c1">// one-fingered touch: rotate</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noRotate</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>				<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_ROTATE</span><span class="p">;</span></div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>				<span class="nx">rotateStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="p">);</span></div><div class='line' id='LC503'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC504'><br/></div><div class='line' id='LC505'>			<span class="k">case</span> <span class="mi">2</span><span class="o">:</span>	<span class="c1">// two-fingered touch: dolly</span></div><div class='line' id='LC506'><br/></div><div class='line' id='LC507'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC508'><br/></div><div class='line' id='LC509'>				<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_DOLLY</span><span class="p">;</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>				<span class="kd">var</span> <span class="nx">dx</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">1</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC512'>				<span class="kd">var</span> <span class="nx">dy</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">1</span> <span class="p">].</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC513'>				<span class="kd">var</span> <span class="nx">distance</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span> <span class="nx">dx</span> <span class="o">*</span> <span class="nx">dx</span> <span class="o">+</span> <span class="nx">dy</span> <span class="o">*</span> <span class="nx">dy</span> <span class="p">);</span></div><div class='line' id='LC514'>				<span class="nx">dollyStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">distance</span> <span class="p">);</span></div><div class='line' id='LC515'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC516'><br/></div><div class='line' id='LC517'>			<span class="k">case</span> <span class="mi">3</span><span class="o">:</span> <span class="c1">// three-fingered touch: pan</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC520'><br/></div><div class='line' id='LC521'>				<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_PAN</span><span class="p">;</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>				<span class="nx">panStart</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="p">);</span></div><div class='line' id='LC524'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC525'><br/></div><div class='line' id='LC526'>			<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC527'><br/></div><div class='line' id='LC528'>				<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC529'><br/></div><div class='line' id='LC530'>		<span class="p">}</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">startEvent</span> <span class="p">);</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>	<span class="p">}</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>	<span class="kd">function</span> <span class="nx">touchmove</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC537'><br/></div><div class='line' id='LC538'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC541'>		<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC542'><br/></div><div class='line' id='LC543'>		<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span> <span class="o">===</span> <span class="nb">document</span> <span class="o">?</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">body</span> <span class="o">:</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">domElement</span><span class="p">;</span></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'>		<span class="k">switch</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC546'><br/></div><div class='line' id='LC547'>			<span class="k">case</span> <span class="mi">1</span><span class="o">:</span> <span class="c1">// one-fingered touch: rotate</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noRotate</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC550'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">!==</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_ROTATE</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>				<span class="nx">rotateEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="p">);</span></div><div class='line' id='LC553'>				<span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">rotateEnd</span><span class="p">,</span> <span class="nx">rotateStart</span> <span class="p">);</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>				<span class="c1">// rotating across whole screen goes 360 degrees around</span></div><div class='line' id='LC556'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">rotateLeft</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">x</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientWidth</span> <span class="o">*</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">rotateSpeed</span> <span class="p">);</span></div><div class='line' id='LC557'>				<span class="c1">// rotating up and down along whole screen attempts to go 360, but limited to 180</span></div><div class='line' id='LC558'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">rotateUp</span><span class="p">(</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rotateDelta</span><span class="p">.</span><span class="nx">y</span> <span class="o">/</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span> <span class="o">*</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">rotateSpeed</span> <span class="p">);</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>				<span class="nx">rotateStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">rotateEnd</span> <span class="p">);</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC563'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>			<span class="k">case</span> <span class="mi">2</span><span class="o">:</span> <span class="c1">// two-fingered touch: dolly</span></div><div class='line' id='LC566'><br/></div><div class='line' id='LC567'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noZoom</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC568'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">!==</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_DOLLY</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>				<span class="kd">var</span> <span class="nx">dx</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">1</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC571'>				<span class="kd">var</span> <span class="nx">dy</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">1</span> <span class="p">].</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC572'>				<span class="kd">var</span> <span class="nx">distance</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span> <span class="nx">dx</span> <span class="o">*</span> <span class="nx">dx</span> <span class="o">+</span> <span class="nx">dy</span> <span class="o">*</span> <span class="nx">dy</span> <span class="p">);</span></div><div class='line' id='LC573'><br/></div><div class='line' id='LC574'>				<span class="nx">dollyEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">distance</span> <span class="p">);</span></div><div class='line' id='LC575'>				<span class="nx">dollyDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">dollyEnd</span><span class="p">,</span> <span class="nx">dollyStart</span> <span class="p">);</span></div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">dollyDelta</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>					<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyOut</span><span class="p">();</span></div><div class='line' id='LC580'><br/></div><div class='line' id='LC581'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC582'><br/></div><div class='line' id='LC583'>					<span class="nx">scope</span><span class="p">.</span><span class="nx">dollyIn</span><span class="p">();</span></div><div class='line' id='LC584'><br/></div><div class='line' id='LC585'>				<span class="p">}</span></div><div class='line' id='LC586'><br/></div><div class='line' id='LC587'>				<span class="nx">dollyStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">dollyEnd</span> <span class="p">);</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC590'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC591'><br/></div><div class='line' id='LC592'>			<span class="k">case</span> <span class="mi">3</span><span class="o">:</span> <span class="c1">// three-fingered touch: pan</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">noPan</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC595'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">state</span> <span class="o">!==</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">TOUCH_PAN</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC596'><br/></div><div class='line' id='LC597'>				<span class="nx">panEnd</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span> <span class="p">);</span></div><div class='line' id='LC598'>				<span class="nx">panDelta</span><span class="p">.</span><span class="nx">subVectors</span><span class="p">(</span> <span class="nx">panEnd</span><span class="p">,</span> <span class="nx">panStart</span> <span class="p">);</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">pan</span><span class="p">(</span> <span class="nx">panDelta</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">panDelta</span><span class="p">.</span><span class="nx">y</span> <span class="p">);</span></div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>				<span class="nx">panStart</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">panEnd</span> <span class="p">);</span></div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'>				<span class="nx">scope</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC605'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC606'><br/></div><div class='line' id='LC607'>			<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'>				<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>		<span class="p">}</span></div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'>	<span class="p">}</span></div><div class='line' id='LC614'><br/></div><div class='line' id='LC615'>	<span class="kd">function</span> <span class="nx">touchend</span><span class="p">(</span> <span class="cm">/* event */</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">endEvent</span> <span class="p">);</span></div><div class='line' id='LC620'>		<span class="nx">state</span> <span class="o">=</span> <span class="nx">STATE</span><span class="p">.</span><span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC621'><br/></div><div class='line' id='LC622'>	<span class="p">}</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;contextmenu&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span> <span class="p">},</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC625'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;mousedown&#39;</span><span class="p">,</span> <span class="nx">onMouseDown</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC626'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;mousewheel&#39;</span><span class="p">,</span> <span class="nx">onMouseWheel</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC627'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;DOMMouseScroll&#39;</span><span class="p">,</span> <span class="nx">onMouseWheel</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span> <span class="c1">// firefox</span></div><div class='line' id='LC628'><br/></div><div class='line' id='LC629'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;touchstart&#39;</span><span class="p">,</span> <span class="nx">touchstart</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC630'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;touchend&#39;</span><span class="p">,</span> <span class="nx">touchend</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC631'>	<span class="k">this</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;touchmove&#39;</span><span class="p">,</span> <span class="nx">touchmove</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>	<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="nx">onKeyDown</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'>	<span class="c1">// force an update at start</span></div><div class='line' id='LC636'>	<span class="k">this</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC637'><br/></div><div class='line' id='LC638'><span class="p">};</span></div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'><span class="nx">THREE</span><span class="p">.</span><span class="nx">OrbitControls</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">EventDispatcher</span><span class="p">.</span><span class="nx">prototype</span> <span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.12281s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-51e3b077e56f2f3244290e430b8d05253607065b.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-93d86f92fbe0e0d33e67339780e369f6c90000f8.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

