import { initUsersData } from "./data-access/user.data-acces";
import { initGroupsData } from "./data-access/group.data-acces";
import { initUsersGroupData } from "./data-access/user-group.data-acces";

export const initDatabse = async (loadData = false) => {
    const load = process.argv.indexOf('loadUsersData') !== -1 || loadData;

    // load initial users data
    await initUsersData(load);

    // load initial groups data
    await initGroupsData(load);

    // init user groups tables
    await initUsersGroupData();
};
