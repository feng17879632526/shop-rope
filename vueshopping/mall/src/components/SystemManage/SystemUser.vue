<template>
  <div id="user">
    <el-table :data="singlePageUsersList" border stripe empty-text="暂无数据"
              style="width: 100%; font-size: 16px; border-radius: 10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);">
      <el-table-column label="用户id" sortable prop="userId" width="180" align="center"></el-table-column>
      <el-table-column label="用户名" sortable prop="username" width="180" align="center"></el-table-column>
      <el-table-column label="性别" sortable prop="userSex" width="180" align="center"></el-table-column>
      <el-table-column label="昵称" sortable prop="nickname" align="center"></el-table-column>
      <el-table-column label="真实姓名" sortable prop="realname" width="180" align="center"></el-table-column>
      <el-table-column label="店主" sortable prop="shopKeeper" width="180" align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" :type="scope.row.shopKeeper === '是' ? '':'danger'">
              {{ scope.row.shopKeeper }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="会员" sortable prop="vip" width="180" align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" :type="scope.row.vip === '是' ? '':'danger'">
              {{ scope.row.vip }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" @confirm="deleteUser(scope.row.userId)">
            <el-button type="danger" round slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="position: fixed; bottom: 30px; text-align: center; width: 84%">
      <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          @current-change="currentChange"
          :page-size="pageSize"
          :total="totalUsers">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemUser",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      totalUsers: 0,
      pageSize: 8,
      singlePageUsersList: [],
    }
  },
  methods: {
    deleteUser(userId) {
      for (let i of this.tableData) {
        if (i.admin === '是' && userId == i.userId) {
          this.$message.error('不能删除管理员！');
          return;
        }
      }
      this.$http
          .get('user/deleteUser', {
            userId: userId,
          })
          .then(res => {
            if (res.code === 10000) {
              this.getUsers();
              this.$message.success('操作成功！');
            } else {
              this.$message.error('未知错误')
            }
          });

    },
    getUsers() {
      this.$http
          .get('user/listUsers')
          .then(res => {
            if (res.code === 10000) {
              this.tableData = [];
              for (let i of res.data) {
                this.tableData.push({
                  userId: i.userId,
                  username: i.username,
                  userSex: i.userSex,
                  nickname: i.nickname,
                  realname: i.realname,
                  shopKeeper: i.shopKeeper ? '是' : '否',
                  vip: i.vip ? '是' : '否',
                  admin: i.admin ? '是' : '否',
                });
              }
              this.totalUsers = res.data.length;
              this.currentChange(this.currentPage);
            } else {
              this.$message.error('未知错误')
            }
          })
    },
    currentChange(pageNum) {
      this.currentPage = pageNum;
      let start = (pageNum - 1) * this.pageSize;
      this.singlePageUsersList = this.tableData.slice(start, start + this.pageSize);
    },
  },
  created() {
    this.getUsers();
  }
}
</script>

<style scoped>
#user {
  margin: 20px 0;
  position: relative;
  left: 250px;
  width: 84%;
}
</style>