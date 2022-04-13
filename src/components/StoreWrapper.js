import { makeAutoObservable } from "mobx";

export class StoreWrapper {
    constructor (store) {
        this.store = store;
        this.data = store.data.items.map(el => { return {...el.data, rec: el}});
        this.total = store.getTotalCount();
        this.page = store.currentPage;
        this.pageSize = store.getPageSize();
        makeAutoObservable(this);
        
        const updator = this.updateContent.bind(this);
        store.on('load', updator);
        store.on('add', updator)
    }

    get paginationConfig() {
        return {
            total: this.total,
            current: this.page,
            pageSize: this.pageSize,
            showSizeChanger: true,
            onShowSizeChange: (...args) => this.updatePagination(...args),
            onChange: (...args) => this.updatePagination(...args),
        }
    }

    updatePagination(page, pageSize){
        if(pageSize !== this.pageSize ){
            this.store.setPageSize(pageSize);
            this.pageSize = pageSize;
        }
        if(page !== this.page) {
            this.page = page;
        }
        this.store.loadPage(page);
    };

    updateContent(store){
        this.data = store.data.items.map(el => el.data);
        this.total = store.getTotalCount();
        this.page = store.currentPage;
        this.pageSize = store.getPageSize();
    }
};