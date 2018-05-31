<?php
    $query_options = json_encode($query_options);
    $component_options = json_encode($component_options);
?>
<div class="showcase-module">
<?php if(!empty($header_opt)):?>
    <div class="showcase-title-wrapper">
    <?php if(in_array('show_title',$header_opt)):?>
        <div class="showcase-title"><?=$title_content;?></div>
    <?php endif;?>
    <?php if(in_array('show_subtitle',$header_opt)):?>
        <div class="showcase-subtitle"><?=$subtitle_content;?></div>
    <?php endif;?>
    </div>
<?php endif;?>
    <div id="showcase-component" class="showcase-content" data-query=<?= $query_options;?> data-options=<?= $component_options?>>
        <?=__('Loading showcase','experiensa');?>
    </div>
</div>