<?php
namespace Home\Controller;

use Think\Controller;
class TestController extends BaseController {
	public function test(){
        echo 123;
    }
    public function insert_test(){
        //实例化
        $Message=M('Message');

        //组装插入的数据
        $data=array();
        $data['user_id']=1;
        $data['username']='张二';
        $data['face_url']='xxx.jpg';
        $data['content']='今天好开心';
        $data['total_likes']=0;
        $data['send_timestamp']=time();

        //插入
        $result=$Message->add($data);
        var_dump($result);
        var_dump($Message->getLastSql());
    }
    public function select_test(){
        $Message=M('Message');
        //设置查询条件
        $where=array();
        $where['user_id']=1;

        $all_messages=$Message->where($where)->select();
        dump($all_messages);

        $all_messages=$Message->where($where)->field('id,username')->select();
        dump($all_messages);

        dump($Message->getLastSql());
    }
    public function find_test(){
        $Message=M('Message');
        $where=array();
        $where['user_id']=1;

        $all_messages=$Message->where($where)->select();

        dump($all_messages);
        dump($Message->getLastSql());

        $all_messages=$Message->where($where)->find();

        dump($all_messages);
        dump($Message->getLastSql());
    }

    public function save_test(){
        $Message=M('Message');
        $where=array();
        $where['id']=1;

        $data=array();
        $data['total_likes']=1;

        $result=$Message->where($where)->save($data);

        dump($result);
    }

    public function delete_test(){
        //实例化数据表
        $Message=M('Message');

        //设置条件
        $where=array();
        $where['id']=1;

        //删除
        $result=$Message->where($where)->delete();

        dump($result);
    }
}

