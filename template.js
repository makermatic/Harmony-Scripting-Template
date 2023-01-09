function template() {
    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get the path in the current node from the array
        var currentNode = selection.selectedNodes()[i];

        // Check for node type before changing
        if (node.type(currentNode) == "PEG") {

            // Change Attribute
            node.setTextAttr(currentNode, "attribute", frame.current(), "valueToSetTo");

            // Get a Node's Name or Element and store it a variable
            var name = node.getName(currentNode);
            var elementId = node.getElementId(currentNode);

            // Rename a Node or an Element
            node.rename(currentNode, currNodeName);
            element.renameById(elementId, "nameToRenameTo");

            // Print a message to the MessageLog
            MessageLog.trace("Hello World!");

            // Print a message to a pop up window
            MessageBox.information("Hello World!");
        }
    }
}