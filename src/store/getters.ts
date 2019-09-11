import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {

    /** 路由 **/
    routers (state: any): any {
        return state.routers;
    },

    /** 信息 **/
    info_config (state: any): any {
        return state.info_config;
    }
};

export default getters;