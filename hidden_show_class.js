<div id="gitIntegration" class="panel panel-default">
      <div class="panel-heading">
        <span class="pull-right">
<a class="help-link" target="_blank" href="http://support.dominodatalab.com/hc/en-us/articles/115000149866-Authenticating-your-Git-repository">What's this <i class="icon-question-sign"></i></a>
</span>
        <h3 class="panel-title">Git Credentials</h3>
      </div>
      <div class="list-group git-credentials">
        <div class="list-group-item credential-list">
          <div class="list-group-item">
            <p>
              Authenticate Domino for access to your Git repositories via <strong>GitHub Personal Access Token (PAT)</strong> or <strong>Private SSH Key</strong>.
A PAT should be used if you add a Git repository via HTTPS, and SSH keys should be used if you add a repository via SSH.

              
<a class="help-link" target="_blank" href="http://support.dominodatalab.com/hc/en-us/articles/115000149866-Authenticating-your-Git-repository">Learn more about working with Domino and Git.</a>

            </p>
          </div>
          
        </div>
          
 <div id="add-credential-form" class="list-group-item add-credential-form hidden">
          <form action="/account/gitDomain" method="POST">
            <input type="hidden" name="csrfToken" value="b3a54692ac72e765c64e856dc1b61f1aabaf8e64-1574835068637-a4d5e12e38cd4bb777eb9e1e"/>
            <div class="form-group">
              <label for="git-credential-domain">Domain</label>
              <input class="form-control input-sm" type="text" name="domain" id="git-credential-domain">
            </div>
            <div class="form-group">
              <label>Authentication Credential Type</label>
              <div class="radio">
                <input type="radio" name="credentialType" id="git-credential-type-pat" value="pat">
                <label for="git-credential-type-pat">Personal Access Token <em>Used for GitHub &amp; GitLab repositories</em></label>
              </div>
              <div class="radio">
                <input type="radio" name="credentialType" id="git-credential-type-app-password" value="appPassword">
                <label for="git-credential-type-app-password">App Password <em>Used for Bitbucket repositories</em></label>
              </div>
              
                <div class="radio">
                  <input type="radio" name="credentialType" id="git-credential-type-ssh" value="ssh">
                  <label for="git-credential-type-ssh">Private SSH Key <em>RSA, DSA, or ECDSA</em></label>
                </div>
              
            </div>
            <div class="form-group git-credential-pat-form hidden">
              <label for="git-credential-pat">Personal Access Token</label>
              <input class="form-control input-sm" type="text" name="patValue" id="git-credential-pat">
            </div>
            <div class="form-group git-credential-app-password-form hidden">
              <label for="git-credential-app-password-username">Username</label>
              <input class="form-control input-sm" type="text" name="appPasswordUsername" id="git-credential-app-password-username">
              <label for="git-credential-app-password">App Password</label>
              <input class="form-control input-sm" type="text" name="appPassword" id="git-credential-app-password">
            </div>
            
            <div class="git-credential-ssh-form hidden">
              <div class="form-group">
                <label for="git-credential-ssh-key">Private SSH Key</label>
                <textarea class="form-control input-sm" rows=10 name="sshValue" id="git-credential-ssh-key" placeholder="The contents of your private key (usually named id_rsa)"></textarea>
              </div>
              <div class="form-group">
                <label for="git-credential-ssh-passphrase">Passphrase <em>(optional)</em></label>
                <input class="form-control input-sm" type="text" name="sshPassphrase" id="git-credential-ssh-passphrase">
              </div>
            </div>
            
            <div class="form-group">
              <button class="btn btn-primary btn-sm" type="submit" name="button">Add Credential</button>
              <button class="btn btn-link btn-sm" type="button" name="cancel" id="cancel-credential">Cancel</button>
            </div>
          </form>
        </div>
        <div id="add-credential" class="list-group-item add-credential">
          <button class="btn btn-block btn-secondary" type="button" id="add-credential-button">Add a New Credential</button>
        </div>
      </div>
    </div>




  <script>
      $$('input[type=radio][name=credentialType]').on('change click', function() {
        var opt = $$(this).val();
        console.log(opt);
        if (opt === "pat") {
          $$('.git-credential-pat-form').removeClass('hidden');
          $$('.git-credential-ssh-form').addClass('hidden');
          $$('.git-credential-app-password-form').addClass('hidden');
        } else if (opt === "appPassword") {
          $$('.git-credential-pat-form').addClass('hidden');
          $$('.git-credential-ssh-form').addClass('hidden');
          $$('.git-credential-app-password-form').removeClass('hidden');
        } else if (opt == "ssh") {
          $$('.git-credential-ssh-form').removeClass('hidden');
          $$('.git-credential-pat-form').addClass('hidden');
          $$('.git-credential-app-password-form').addClass('hidden');
        } else {
          $$('.git-credential-pat-form').addClass('hidden');
          $$('.git-credential-ssh-form').addClass('hidden');
          $$('.git-credential-app-password-form').addClass('hidden');
        }
      });

    (function () {
      $$('#add-credential-button').click(function() {
        $$('#add-credential-form').removeClass('hidden');
        $$('#add-credential').addClass('hidden');
      })
      $$('#cancel-credential').click(function() {
        $$('#add-credential-form').addClass('hidden');
        $$('#add-credential').removeClass('hidden');
        $$('#git-credential-ssh-key').find("input, textarea").val('');
        $$('#git-credential-ssh-passphrase').find("input, password").val('');
        $$('#git-credential-pat').find("input, text").val('');
      })
    })()
  </script>








<div class="col-md-8 col-md-offset-2">
                <h1><i class="ion ion-ios-lock"></i> Unauthorized</h1>
                <p class="text-danger">You are not authorized to perform this action. The project owner can grant you appropriate access to perform this action.</p>
                <p>Or please <a href="mailto:support+develop@dominodatalab.com">contact us</a> if you need any support.</p>
            </div>




<div class=" no-webapp show-primary-nav">
        
            <div>
              
    <div class="scrollable-content set-padding">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1><i class="ion ion-ios-lock"></i> Unauthorized</h1>
                <p class="text-danger">You are not authorized to perform this action. The project owner can grant you appropriate access to perform this action.</p>
                <p>Or please <a href="mailto:support+develop@dominodatalab.com">contact us</a> if you need any support.</p>
            </div>
        </div>
    </div>

              
                  



<div class="footer ">
    <div class="row mark-container">
        <div class="col-md-6">
            
        </div>
    </div>
    
</div>




              
            </div>
        
            </div>
