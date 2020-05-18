<?php
namespace Home\Controller;

use Think\Controller;
class MessageController extends BaseController{

	//发布新树洞
	public function publish_new_message(){
		//dump(123);
		if(!$_POST['user_id']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足:user_id';

			$this->ajaxReturn($return_data);
		}

		if(!$_POST['username']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足:username';

			$this->ajaxReturn($return_data);
		}

		if(!$_POST['face_url']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足:face_url';

			$this->ajaxReturn($return_data);
		}

		if(!$_POST['content']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足:content';

			$this->ajaxReturn($return_data);
		}

		$Message=M('Message');

		$data=array();
		$data['user_id']=$_POST['user_id'];//用户id
		$data['username']=$_POST['username'];//用户名
		$data['face_url']=$_POST['face_url'];
		$data['content']=$_POST['content'];//树洞消息
		$data['total_likes']=0;//点赞数】
		$data['send_timestamp']=time();//当前时间戳

		//插入数据
		$result=$Message->add($data);
		if($result){
			$return_data=array();
			$return_data['error_code']=0;
			$return_data['mes']='数据添加成功';

			$this->ajaxReturn($return_data);
		}
		else{
			$return_data=array();
			$return_data['error_code']=2;
			$return_data['mes']='数据添加失败';

			$this->ajaxReturn($return_data);
		}

		dump($_POST);
	}

	public function get_all_messages(){
		//实例化数据库表
		$Message=M('message');
		//设置查询条件
		//按id从大到小
		$all_messages=$Message->order('id desc')->select();

		//将所有的时间戳转换为2019-04-22 12:00:00，注意别随意换行
		//dump($all_messages);
		foreach($all_messages as $key=>$message){
			$all_messages[$key]['send_timestamp']=date('Y-m-d H:i:s',$message['send_timestamp']);
		}

		$return_data=array();
		$return_data['error_code']=0;
		$return_data['msg']='数据获取成功';
		$return_data['data']=$all_messages;

		$this->ajaxReturn($return_data);

		//dump($all_messages);

	}
	public function get_one_messages(){
		//实例化数据库表
		$Message=M('message');
		//设置查询条件
		//按id从大到小
		$where['user_id']=$_POST['user_id'];
		$all_messages=$Message->where($where)->order('id desc')->select();

		//将所有的时间戳转换为2019-04-22 12:00:00，注意别随意换行
		//dump($all_messages);
		foreach($all_messages as $key=>$message){
			$all_messages[$key]['send_timestamp']=date('Y-m-d H:i:s',$message['send_timestamp']);
		}

		$return_data=array();
		$return_data['error_code']=0;
		$return_data['msg']='数据获取成功';
		$return_data['data']=$all_messages;

		$this->ajaxReturn($return_data);

		//dump($all_messages);

	}
	public function delete_one_message(){
		//实例化数据库表
		$Message=M('message');
		//设置查询条件
		//按id从大到小
		$where['id']=$_POST['message_id'];

		$message=$Message->where($where)->find();
		//判断是否存在该条树洞
		if(!$message){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='指定的消息不存在';
			$this->ajaxReturn($return_data);
		}


		$Message->where($where)->delete();

		$return_data=array();
		$return_data['error_code']=0;
		$return_data['msg']='数据删除成功';

		$this->ajaxReturn($return_data);

		//dump($all_messages);

	}
	public function do_like(){
		//校验参数
		if(!$_POST['message_id']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足：message_id';

			$this->ajaxReturn($return_data);
		}
		if(!$_POST['user_id']){
			$return_data=array();
			$return_data['error_code']=1;
			$return_data['msg']='参数不足：user_id';

			$this->ajaxReturn($return_data);
		}
		//dump($_POST);

		//查询条件

		$Message=M('Message');
		$where=array();
		$where['id']=$_POST['message_id'];

		$message=$Message->where($where)->find();

		//判断是否存在该条树洞
		if(!$message){
			$return_data=array();
			$return_data['error_code']=2;
			$return_data['msg']='指定的树洞不存在';

			$this->ajaxReturn($return_data);
		}

		//dump($message);

		//构造要保存的数据
		$data=array();
		$data['total_likes']=$message['total_likes']+1;

		//构造要保存的条件
		$where=array();
		$where['id']=$_POST['message_id'];
		$result=$Message->where($where)->save($data);
		
		if($result){
			$return_data=array();
			$return_data['error_code']=0;
			$return_data['msg']='数据保存成功';
			$return_data['data']['message_id']=$_POST['message_id'];
			$return_data['data']['total_likes']=$data['total_likes'];

			$this->ajaxReturn($return_data);

		}
		else{
			$return_data=array();
			$return_data['error_code']=2;
			$return_data['msg']='数据保存失败';
			$this->ajaxReturn($return_data);
		}
	}
}