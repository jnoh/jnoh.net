module Jekyll
  module LastModifiedAtFilter
    def last_modified_at(path)
      File.mtime( path )
    end
  end
end

Liquid::Template.register_filter(Jekyll::LastModifiedAtFilter)
