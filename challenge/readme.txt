Please create a web page that has one button titled “Load Comments” and an area for comments to be
displayed. 

Clicking on the “Load Comments” button should make an AJAX call to load the content in
json‐comments‐ds.txt into the comments area.  

Clicking the “Load Comments” button again should
refresh the comments listing.

The comments in the datasource are threaded.  Initially, only the top‐most comments should be visible.  
All the children comment replies should be hidden.

When a user hovers over a comment block, it should turn a different color to indicate the hover state.

When a user clicks on a comment, the comment should show its direct children.  (This action should not
cause its children’s children to become visible)
