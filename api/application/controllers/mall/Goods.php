<?php

class Goods extends XY_Controller
{

    public function get_list()
    {
        try {
            $name = $this->input->get('name');
            $status = $this->input->get('status');
            $like = array();
            $where = '';
            if ($status != '') {
                $where .= 'status = ' . $status;
            }
            if ($name) {
                $like['name'] = $name;
            }
            $result = $this->common->get_list(array(
                'table' => 'mall_goods',
                'where' => $where,
                'like' => $like,
                'order_by' => 'sort asc,create_time asc'
            ));
            $this->ajax_output->output('200', null, $result);
        } catch (Exception $e) {
            $this->ajax_output->output($e->getCode(), $e->getMessage());
        }
    }

    public function submit()
    {
        try {
            $id = $this->input->post('id');
            $values = array(
                'name' => $this->input->post('name'),
                'status' => $this->input->post('status'),
                'sort' => $this->input->post('sort')
            );
            if ($id) {
                $result = $this->common->update('mall_goods', array('id' => $id), $values);
            } else {
                $result = $this->common->insert('mall_goods', $values);
            }
            $this->ajax_output->output('200', '保存成功', $result);
        } catch (Exception $e) {
            $this->ajax_output->output($e->getCode(), $e->getMessage());
        }
    }

    public function delete()
    {
        try {
            $id = $this->input->post('id');
            if ($id == '') {
                throw new Exception('缺少参数', '1');
            }
            $result = $this->common->delete('mall_goods', array('id' => $id));
            $this->ajax_output->output('200', null, $result);
        } catch (Exception $e) {
            $this->ajax_output->output($e->getCode(), $e->getMessage());
        }
    }


}
