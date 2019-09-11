import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {

    /** 路由 **/
    SET_ROUTERS (state: any, routers: any): void {
        state.routers = routers;
    }
};

export default mutations;
