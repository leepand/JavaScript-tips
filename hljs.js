//手动高亮及markdown格式
                
                var divContainer = document.getElementById("divContainer");
                divContainer.innerHTML=workspaceHtml;
                //$(".workspaceHtml").html(workspaceHtml);//('<pre>'+elements+'</pre>');
                hljs.initHighlightingOnLoad();
                hljs.initLineNumbersOnLoad();
                var elements = document.getElementsByClassName('markdown');
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    element.innerHTML = marked(element.textContent);
                }   
                //addClass();
                //为每个pre code增加样式 hljs
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
