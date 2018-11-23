<?php

class Experiensa_Default_Setup{
  /**
   * experiensa_default_image_size defines the default size for images
   * 9999 correspond to unlimited height
   *
   * @since    1.0.0
   * tutorial source: https://wordpress.stackexchange.com/questions/54423/add-image-size-in-a-plugin-i-created
   */
  public function experiensa_default_image_size() {
    add_image_size('exp-thumbnail',600,9999);

    update_option( 'thumbnail_size_w', 600 );
    update_option( 'thumbnail_size_h', 9999 );
    update_option( 'thumbnail_crop', false);

    update_option( 'medium_size_w', 900 );
    update_option( 'medium_size_h', 9999 );

    update_option( 'large_size_w', 1024 );
    update_option( 'large_size_h', 9999 );
  }

}
