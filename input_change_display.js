


      $("body").on('change click','input[type=radio][name=credentialType]', function() {
        var opt = $(this).val();
        console.log(opt,"pppppp");
        if (opt === "pat") {
          $('.git-credential-pat-form').removeClass('hidden');
          $('.git-credential-ssh-form').addClass('hidden');
          $('.git-credential-app-password-form').addClass('hidden');
        } else if (opt === "appPassword") {
          $('.git-credential-pat-form').addClass('hidden');
          $('.git-credential-ssh-form').addClass('hidden');
          $('.git-credential-app-password-form').removeClass('hidden');
        } else if (opt == "ssh") {
          $('.git-credential-ssh-form').removeClass('hidden');
          $('.git-credential-pat-form').addClass('hidden');
          $('.git-credential-app-password-form').addClass('hidden');
        } else {
          $('.git-credential-pat-form').addClass('hidden');
          $('.git-credential-ssh-form').addClass('hidden');
          $('.git-credential-app-password-form').addClass('hidden');
        }
      });

    (function () {
      $('#add-credential-button').click(function() {
        $('#add-credential-form').removeClass('hidden');
        $('#add-credential').addClass('hidden');
      })
      $('#cancel-credential').click(function() {
        $('#add-credential-form').addClass('hidden');
        $('#add-credential').removeClass('hidden');
        $('#git-credential-ssh-key').find("input, textarea").val('');
        $('#git-credential-ssh-passphrase').find("input, password").val('');
        $('#git-credential-pat').find("input, text").val('');
      })
    })()



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




<style>
.show {
  display: block !important;
}
.hidden {
  display: none !important;
}

</style>
