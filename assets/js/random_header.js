var postsURL = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];

var postsTitle = [{% for post in site.posts %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endfor %}];