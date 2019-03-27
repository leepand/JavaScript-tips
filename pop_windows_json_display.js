<h2>创建模态框（Modal）</h2>
<!-- 按钮触发模态框 -->
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	开始演示模态框
</button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					Task Details
				</h4>
			</div>
			<div class="modal-body" id="json">
				json信息
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭
				</button>
				<button type="button" class="btn btn-primary">
					确定
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>

  <div class="col-lg-6"  >
    <section class="panel" style="height:600px">
        <header class="panel-heading">
            JSON数据
        </header>
        <div class="panel-body" style="height:580px;overflow:auto">
            <input type="hidden" name="json_data" id="json_data" value="{{ json_data }}"/>
            <button id="collapse-btnee">折叠</button>
            <button id="expand-btn">展开</button>
            <button id="save-btn">保存</button>
            <div id="json"></div>
        </div>
    </section>
</div>
