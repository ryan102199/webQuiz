// next prev function
$(document).ready(function() {
    var divs = $('.show-section>.steps-inner');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $(".next").click(function() {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $(".prev").click(function() {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});

// label active on input check
$(document).ready(function()
{
    $('.form-input input').on("change", function()
    {

            $(".form-input").removeClass("active-input");
            $(this).parent().addClass("active-input");
    })
})

// disable on enter
$('form').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});

  document.getElementById('quiz-calculate').addEventListener('click', function () {
            var q1 = parseInt(document.querySelector('input[name=q1]:checked').value) || 0;
            var q2 = parseInt(document.querySelector('input[name=q2]:checked').value) || 0;
            var q3 = parseInt(document.querySelector('input[name=q3]:checked').value) || 0;
            var q4 = parseInt(document.querySelector('input[name=q4]:checked').value) || 0;
            var q5 = parseInt(document.querySelector('input[name=q5]:checked').value) || 0;
            var q7 = parseInt(document.querySelector('input[name=q7]:checked').value) || 0;
            var sum = q1 + q2 + q3 + q4 + q5 + q7;
            document.getElementById('quiz-result').innerHTML = 'Your score is ' + sum + '/28';
            var quizResultInfo = document.getElementById('quiz-result-info');
            if (sum >= 7) {
                quizResultInfo.innerHTML = 'Always burns, extremely pale and never tans, red or blonde, lilghht colored eyes.';
            } else if (sum >= 8 && sum <= 16) {
                quizResultInfo.innerHTML = 'Pale but somewhat tans and burns fairly easily burns, extremely pale and never tans, red or blonde, lilghht colored eyes.';
            } else if (sum >= 17 && sum <= 25) {
                quizResultInfo.innerHTML = 'Pale but somewhat tans and burns fairly easily burns, extremely pale and never tans, red or blonde, lilghht colored eyes.';
            } else if (sum >= 26 && sum <= 30) {
                quizResultInfo.innerHTML = 'Pale but somewhat tans and burns fairly easily burns, extremely pale and never tans, red or blonde, lilghht colored eyes.';
            }
        });