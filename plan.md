
Initial plan:

1. API endpoints:
a. query a category: eg. /appetizer, /phos, /vermicelli;
b. query a single item: eg. /phos/:id (/phos/P1)
c. query order detail: /ordres/:id 
todo list:
implement any one of above in app.js

2. backend database tradeoff:
a. use a seprate table for each category;
good for performance, 
bad : more dulicate code;
b. use a signle menu table for all item, add category ;
reason: database is small.
todo list:
none

3. front-end design:
a. functionalities: 
query category: shows all the items in the category;
query item: show the detail info about this item (id, name, price, description...);
ordering: add item(s) to the order, remove item(s), increase/decrease amount of an item;...
admin: modify menu, inventary, order details, sumup orders, etc..
b. web page appearence:
todo list:
a. decide web page layout:
single page with multiple tabs OR multiple pages;
b. what elements need to use: 
tables, unordered list, buttons ...
c. finsh query category and query item first.
maybe not use react at this point.
