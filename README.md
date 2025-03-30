# Harmony Scripting Template



## Introduction

This is a js file that serves as a starting point for making micro scripts for Toon Boom Harmony. Feel free to copy it, delete the methods, that you don't want to use or even the if statement, and make your own mini scripts.

## Concepts

Each method has a comment explaining what it does as well as placeholder arguments. Just make sure the syntax for each argument is the same as each placeholder.

By default, all methods are written inside a for-loop that loops across the nodes selected. In other words, you'll have to select nodes in the node view before you run a script. 

```js
// Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i
```

It also checks a node type through an if statement. The comment provides examples of common nodes you'll likely check. 

```js
// Check for node type before changing, good examples are "PEG", "GROUP", and "READ" for drawings(elements)
        if (node.type(currentNode) == "PEG") {
```



## Getting Attributes

The only method that might throw you off is the first one that changes node attributes, as you might not know what a specific attribute is called internally.

```js
node.setTextAttr(currentNode, "attribute", frame.current(), "valueToSetTo");
```

Getting the internal attribute name as actually pretty simple. In the node view, hit the ☰ icon, go to view -> 

![Recording 2025-03-05 at 09 54 32](https://github.com/user-attachments/assets/37fd86ca-7de2-4ec6-bd18-7e9ecfff5606)


Then when you open a node's property window, you'll see a gear button for each attribute, select the gear, then copy the `Attribute Keyword`

![Recording 2025-03-05 at 09 58 12](https://github.com/user-attachments/assets/f81344ed-e81c-4ce6-a833-0cc864061ac3)



## Conclusion

Hopefully this template can point you in the right direction on your Harmony scripting journey. Harmony's [Scripting API](https://docs.toonboom.com/help/harmony-24/scripting/script/index.html) can be overwhelming if you're new to programming, but it can guide you if you get stuck. For me, the [Class List](https://docs.toonboom.com/help/harmony-24/scripting/script/annotated.html) was an excellent resource in learning how to make Harmony scripts, particularly the [`node`](https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html), `selection`, [`MessageBox`](https://docs.toonboom.com/help/harmony-24/scripting/script/classMessageBox.html) and [`Drawing`](https://docs.toonboom.com/help/harmony-24/scripting/script/classDrawing.html) classes.
