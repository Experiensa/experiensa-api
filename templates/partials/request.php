<!-- Component to show a request form -->
<div class="request-module" style="padding: 10px">
    <?php if(!empty($header_opt)):?>
        <div class="request-title-wrapper">
            <?php if(in_array('show_title',$header_opt)):?>
                <div class="request-title"><?=$title_content;?></div>
            <?php endif;?>
            <?php if(in_array('show_subtitle',$header_opt)):?>
                <div class="request-subtitle"><?=$subtitle_content;?></div>
            <?php endif;?>
        </div>
    <?php endif;?>
    <div id="requestComponent"></div>
</div>