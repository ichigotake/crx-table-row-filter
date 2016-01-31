(function () {
    var $table;

    document.addEventListener("mousedown", function(event){
        $table = $(event.target).closest("table");
    }, true);

    chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
        if (!(request instanceof Object)) {
            return;
        }
        if (request.name !== "tableToSpreadsheet") {
            return;
        }
        if (typeof $table[0] === "undefined") {
            alert("Target is not the table element");
            return;
        }

        var targetTableHasCaption = !!$table.has('caption').length;
        if (!targetTableHasCaption) {
            $table.append('<caption></caption>');
        }

        var selectorNamePrefix = request.name;
        var formSelectorName = selectorNamePrefix + "-form";
        var keywordSelectorName = selectorNamePrefix + "-keyword";
        var finishFilteringSelectorName = selectorNamePrefix + '-finishFiltering';

        $table.find('caption').append(
            '<form id="' + formSelectorName + '">' +
            '<input type="text" id="' + keywordSelectorName + '" placeholder="キーワード">' +
            '<input type="submit" value="絞り込み">' +
            ' <a href="#" id="' + finishFilteringSelectorName + '">[x]</a>' +
            '</form>'
        );
        
        var $form = $('#' + formSelectorName);
        var $keyword = $('#' + keywordSelectorName);
        $keyword.focus();

        $form.submit(function() {
            filtering($keyword.val());
            return false;
        });

        $('#' + finishFilteringSelectorName).click(function() {
            filtering("");
            if (targetTableHasCaption) {
                $form.remove();
            } else {
                $table.find('caption').remove();
            }
        });

    });

    function filtering(keyword) {
        var $tr;
        if ($table.has('tbody').length) {
            $tr = $table.find('tbody tr');
        } else {
            $tr = $table.find('tr');
        }
        $tr.each(function(i, e) {
            var $e = $(e);
            if ($e.has('th').length) {
                $e.show();
                return;
            }
            if ($e.text().indexOf(keyword) > -1) {
                $e.show();
            } else {
                $e.hide();
            }
        });
    };


})();
