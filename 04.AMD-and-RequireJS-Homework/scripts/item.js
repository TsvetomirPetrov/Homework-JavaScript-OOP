define(function () {

    function Item(content) {
        if (content === '') {
            throw Error('The item content cannot be empty');
        }
        this._content = content;
    }

    Item.prototype.addToDOM = function (parent) {
        var item, lastItem, checkbox, self, content, itemDiv;

        function isCompleted() {
            var itemContent;
            itemContent = document.getElementById('item' + this._id).lastChild.firstChild;
            if (document.getElementById(this._id).checked) {
                itemContent.style.backgroundColor = 'lightgreen';
            }
            else {
                itemContent.style.backgroundColor = 'white';
            }
        }

        item = document.createElement('div');
        lastItem = parent.lastChild.previousSibling;
        if (lastItem != undefined) {
            if (lastItem.id != '') {
                this._id = parent.id[parent.id.length - 1] +
                (Number(lastItem.id[lastItem.id.length - 1]) + 1);
                item.id = 'item' + this._id;
            }
            else {
                this._id = parent.id[parent.id.length - 1] + 1;
                item.id = 'item' + parent.id[parent.id.length - 1] + 1;
            }
            checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = this._id;
            self = this;
            checkbox.addEventListener("click", function () {
                isCompleted.call(self)
            });
            content = document.createElement('p');
            itemDiv = document.createElement('div');
            itemDiv.appendChild(content);
            itemDiv.appendChild(document.createElement('hr'));
            content.innerHTML = this._content;
            item.appendChild(checkbox);
            item.appendChild(itemDiv);
            if (!(document.getElementById(item.id))) {
                parent.insertBefore(item, parent.lastChild);
            }
        }
    };

    return Item;
});