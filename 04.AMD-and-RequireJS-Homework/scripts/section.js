define(['Item'], function (Item) {
    var sectionsCreated = 0;

    function Section(title) {
        if (title === '') {
            throw Error('The section title cannot be empty');
        }
        this._title = title;
        sectionsCreated++;
    }

    Section.prototype.addToDOM = function (parent) {
        var section, title, newItemContent, newItemButton, newItem, lastSectionID;

        section = document.createElement('div');
        lastSectionID = document.getElementById('container').lastChild.previousSibling.id;
        section.id = 'section_' + Number(sectionsCreated);

        title = document.createElement('h2');
        title.innerHTML = this._title;
        section.appendChild(title);
        newItemContent = document.createElement('input');
        newItemContent.placeholder = 'Add item...';
        newItemButton = document.createElement('input');
        newItemButton.type = 'button';
        newItemButton.value = '+';
        newItemButton.addEventListener("click", function () {
            var item = new Item(newItemContent.value);
            item.addToDOM(document.getElementById(section.id));
        });
        newItem = document.createElement('div');
        newItem.id = 'newSection';
        newItem.appendChild(newItemContent);
        newItem.appendChild(newItemButton);
        section.appendChild(newItem);

        if (!(document.getElementById(section.id))) {
            parent.insertBefore(section, parent.lastChild);
        }
    };

    return Section;
});