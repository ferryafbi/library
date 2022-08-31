<script>
        /*<![CDATA[*/
        function get_text(el) {ret = ""; var length = el.childNodes.length; for(var i = 0; i < length; i++) {var node = el.childNodes[i]; if(node.nodeType != 8) {ret += node.nodeType != 1 ? node.nodeValue : get_text(node);} } return ret;} var words = get_text(document.querySelector('.post-body')); var count = words.split(' ').length; var avg = 185; var counted = count / avg; var maincount = Math.round(counted); document.querySelector(".readTime").innerHTML = maincount + " min read";
        /*]]>*/  
    </script>
