define(['section'], function (Section) {
    function Container(title) {
        this._title = title;
    }

    Container.prototype.addToDOM = function (parent) {
        var container, title, newSection, newSectionButton, newSectionTitle;

        container = document.createElement('div');
        container.id = 'container';
        title = document.createElement('h1');
        title.innerHTML = this._title;
        container.appendChild(title);
        newSectionTitle = document.createElement('input');
        newSectionTitle.placeholder = 'Title...';
        newSectionButton = document.createElement('input');
        newSectionButton.type = 'button';
        newSectionButton.value = 'New Section';
        newSectionButton.addEventListener("click", function () {
            var section = new Section(newSectionTitle.value);
            section.addToDOM(document.getElementById('container'));
        });
        newSection = document.createElement('div');
        newSection.id = 'newSection';
        newSection.appendChild(newSectionTitle);
        newSection.appendChild(newSectionButton);
        container.appendChild(newSection);
        if (!(document.getElementById('container'))) {
            parent.appendChild(container);
        }
    };

    return Container;
});